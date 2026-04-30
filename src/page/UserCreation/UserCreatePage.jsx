import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserCreatePage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        roles: [{ business: '', role: 'cashier', branch: '' }]
    });
    const [businesses, setBusinesses] = useState([]);
    const [branchOptions, setBranchOptions] = useState([[]]);
    const [message, setMessage] = useState('');
    const [users, setUsers] = useState([]);
    const [editingUserId, setEditingUserId] = useState(null);

    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGYwNzlhOTc3ZTFhNTI5NWVkNGNmYiIsImlhdCI6MTc1NDgyMjQwNywiZXhwIjoxNzU1NDI3MjA3fQ.TVWhOKCydB4mNnF3H5om_1USRHtlKXeHWmL_FdLY89A";
    const axiosConfig = { headers: { Authorization: `Bearer ${TOKEN}` } };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bizRes, userRes] = await Promise.all([
                    axios.get('http://localhost:5000/api/businesses', axiosConfig),
                    axios.get('http://localhost:5000/api/users', axiosConfig),
                ]);
                setBusinesses(bizRes.data);
                setUsers(userRes.data);
            } catch (err) {
                console.error('Error fetching data:', err.response?.data || err.message);
            }
        };
        fetchData();
    }, []);

    const handleInputChange = e => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleRoleChange = async (e, index, field) => {
        const value = e.target.value;
        const updatedRoles = [...formData.roles];
        updatedRoles[index][field] = value;
        if (field === 'business') updatedRoles[index].branch = '';
        setFormData(prev => ({ ...prev, roles: updatedRoles }));

        if (field === 'business') {
            try {
                const res = await axios.get('http://localhost:5000/api/branches/', {
                    headers: { ...axiosConfig.headers, 'x-business-id': value }
                });
                const updatedOptions = [...branchOptions];
                updatedOptions[index] = res.data;
                setBranchOptions(updatedOptions);
            } catch {
                const updatedOptions = [...branchOptions];
                updatedOptions[index] = [];
                setBranchOptions(updatedOptions);
            }
        }
    };

    const addRole = () => {
        setFormData(prev => ({
            ...prev,
            roles: [...prev.roles, { business: '', role: 'cashier', branch: '' }]
        }));
        setBranchOptions(prev => [...prev, []]);
    };

    const removeRole = index => {
        const updatedRoles = [...formData.roles];
        updatedRoles.splice(index, 1);
        const updatedOptions = [...branchOptions];
        updatedOptions.splice(index, 1);
        setFormData(prev => ({ ...prev, roles: updatedRoles }));
        setBranchOptions(updatedOptions);
    };

    const resetForm = () => {
        setEditingUserId(null);
        setFormData({
            fullName: '',
            email: '',
            password: '',
            roles: [{ business: '', role: 'cashier', branch: '' }]
        });
        setBranchOptions([[]]);
        setMessage('');
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setMessage('');
        const selectedBusinessId = formData.roles[0]?.business;
        const cleanRoles = formData.roles.map(r => ({ ...r, branch: r.branch || undefined }));
        const payload = { ...formData, roles: cleanRoles };
        const config = {
            headers: {
                ...axiosConfig.headers,
                'x-business-id': selectedBusinessId
            }
        };

        try {
            const res = editingUserId
                ? await axios.put(`http://localhost:5000/api/users/${editingUserId}`, payload, config)
                : await axios.post('http://localhost:5000/api/users', payload, config);

            setMessage(editingUserId ? 'User updated successfully' : 'User created successfully');
            resetForm();

            const updatedUsers = await axios.get('http://localhost:5000/api/users', axiosConfig);
            setUsers(updatedUsers.data);
        } catch (err) {
            setMessage(err.response?.data?.error || 'Something went wrong');
        }
    };

    const handleEdit = async (user) => {
        const initialRoles = user.roles.map(r => ({
            business: typeof r.business === 'object' ? r.business._id : r.business,
            role: r.role,
            branch: r.branch ? (typeof r.branch === 'object' ? r.branch._id : r.branch) : ''
        }));

        setEditingUserId(user._id);
        setFormData({
            fullName: user.fullName,
            email: user.email,
            password: '',
            roles: initialRoles
        });

        // Preload branch options for each role
        const branchData = await Promise.all(initialRoles.map(r =>
            axios.get('http://localhost:5000/api/branches/', {
                headers: {
                    ...axiosConfig.headers,
                    'x-business-id': r.business
                }
            })
                .then(res => res.data)
                .catch(() => [])
        ));

        setBranchOptions(branchData);
    };


    const handleDelete = async id => {
        try {
            await axios.delete(`http://localhost:5000/api/users/${id}`, axiosConfig);
            const updatedUsers = await axios.get('http://localhost:5000/api/users', axiosConfig);
            setUsers(updatedUsers.data);
        } catch (err) {
            console.error('Error deleting user:', err.response?.data || err.message);
        }
    };

    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-1">
                {editingUserId ? 'Edit User' : 'Create New User'}
            </h2>
            <span className={`
        inline-block mb-6 px-3 py-1 text-xs font-semibold rounded-full
        ${editingUserId ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}
      `}>
                {editingUserId ? 'Editing Existing User' : 'Creating New User'}
            </span>

            {message && (
                <p className={`mb-4 text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                    {message}
                </p>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        required
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        required
                        className="input input-bordered w-full"
                    />
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder={editingUserId ? "Leave blank to keep password" : "Password"}
                        required={!editingUserId}
                        className="input input-bordered w-full"
                    />
                </div>

                <div className="mt-6 space-y-6">
                    {formData.roles.map((role, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-md border">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-md font-semibold">Role {index + 1}</h4>
                                {formData.roles.length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => removeRole(index)}
                                        className="text-sm text-red-600 hover:underline"
                                    >
                                        Remove Role
                                    </button>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Business</label>
                                    <select
                                        value={role.business}
                                        onChange={e => handleRoleChange(e, index, 'business')}
                                        required
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">Select Business</option>
                                        {businesses.map(b => (
                                            <option key={b._id} value={b._id}>{b.name}</option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-gray-500 mt-1">Business assignment.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Role</label>
                                    <select
                                        value={role.role}
                                        onChange={e => handleRoleChange(e, index, 'role')}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="admin">Admin</option>
                                        <option value="manager">Manager</option>
                                        <option value="cashier">Cashier</option>
                                    </select>
                                    <p className="text-xs text-gray-500 mt-1">Access level.</p>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">Branch</label>
                                    <select
                                        value={role.branch}
                                        onChange={e => handleRoleChange(e, index, 'branch')}
                                        disabled={!role.business}
                                        className="select select-bordered w-full"
                                    >
                                        <option value="">Select Branch</option>
                                        {(branchOptions[index] || []).map(br => (
                                            <option key={br._id} value={br._id}>{br.name}</option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-gray-500 mt-1">Optional branch.</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button type="button" onClick={addRole} className="text-blue-600 text-sm hover:underline">
                        + Add Another Role
                    </button>
                    <div>
                        <button type="submit" className="btn btn-primary">
                            {editingUserId ? 'Update User' : 'Create User'}
                        </button>
                        {editingUserId && (
                            <button
                                type="button"
                                onClick={resetForm}
                                className="btn btn-sm btn-ghost btn-warning ml-2"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                </div>
            </form>

            <h2 className="text-2xl font-bold mt-10 mb-4">User List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full border rounded-md shadow-sm">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-3 text-left">Name</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-left">Roles</th>
                            <th className="p-3 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(u => (
                            <tr key={u._id} className="border-t">
                                <td className="p-3">{u.fullName}</td>
                                <td className="p-3">{u.email}</td>
                                <td className="p-3 space-y-1">
                                    {u.roles.map((r, i) => (
                                        <div key={i} className="text-sm text-gray-700">
                                            <span className="font-semibold">{r.role}</span> — {r.business?.name || r.business}
                                            {r.branch?.name ? ` → ${r.branch.name}` : ''}
                                        </div>
                                    ))}
                                </td>
                                <td className="p-3 space-x-2">
                                    <button onClick={() => handleEdit(u)} className="btn btn-sm btn-outline btn-info">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(u._id)} className="btn btn-sm btn-outline btn-error">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserCreatePage;
