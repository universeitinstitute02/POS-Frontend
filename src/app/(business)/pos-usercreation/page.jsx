"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { HiOutlineUserAdd, HiOutlineMail, HiOutlineLockClosed, HiOutlineIdentification, HiOutlinePlus, HiOutlineTrash, HiOutlinePencilAlt, HiOutlineCheckCircle, HiOutlineX } from 'react-icons/hi';

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

    // Using the same hardcoded token from the original for consistency during migration
    const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4OGYwNzlhOTc3ZTFhNTI5NWVkNGNmYiIsImlhdCI6MTc1NDgyMjQwNywiZXhwIjoxNzU1NDI3MjA3fQ.TVWhOKCydB4mNnF3H5om_1USRHtlKXeHWmL_FdLY89A";
    const axiosConfig = { headers: { Authorization: `Bearer ${TOKEN}` } };
    const BASE_URL = 'http://localhost:5000/api';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [bizRes, userRes] = await Promise.all([
                    axios.get(`${BASE_URL}/businesses`, axiosConfig),
                    axios.get(`${BASE_URL}/users`, axiosConfig),
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

        if (field === 'business' && value) {
            try {
                const res = await axios.get(`${BASE_URL}/branches/`, {
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
            if (editingUserId) {
                await axios.put(`${BASE_URL}/users/${editingUserId}`, payload, config);
            } else {
                await axios.post(`${BASE_URL}/users`, payload, config);
            }

            setMessage(editingUserId ? 'User updated successfully' : 'User created successfully');
            resetForm();

            const updatedUsers = await axios.get(`${BASE_URL}/users`, axiosConfig);
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

        const branchData = await Promise.all(initialRoles.map(r =>
            axios.get(`${BASE_URL}/branches/`, {
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
        if (!confirm("Are you sure?")) return;
        try {
            await axios.delete(`${BASE_URL}/users/${id}`, axiosConfig);
            const updatedUsers = await axios.get(`${BASE_URL}/users`, axiosConfig);
            setUsers(updatedUsers.data);
        } catch (err) {
            console.error('Error deleting user:', err.response?.data || err.message);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">User Management</h1>
                    <p className="text-slate-500 mt-1">Create and manage access control for your businesses.</p>
                </div>
                <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 text-xs font-black rounded-full uppercase tracking-widest ${editingUserId ? 'bg-amber-100 text-amber-700' : 'bg-emerald-100 text-emerald-700'}`}>
                        {editingUserId ? 'Editing Mode' : 'Creation Mode'}
                    </span>
                </div>
            </div>

            {message && (
                <div className={`p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${message.includes('successfully') ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-rose-50 text-rose-700 border border-rose-100'}`}>
                    <HiOutlineCheckCircle className="w-5 h-5" />
                    <p className="text-sm font-bold">{message}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* FORM SECTION */}
                <div className="lg:col-span-1">
                    <div className="card-modern p-8 sticky top-24">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                                <HiOutlineUserAdd className="w-6 h-6" />
                            </div>
                            <h2 className="text-xl font-bold text-slate-900">{editingUserId ? 'Edit User' : 'New User'}</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                            <HiOutlineIdentification className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                            <HiOutlineMail className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Password</label>
                                    <div className="relative group">
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors">
                                            <HiOutlineLockClosed className="w-5 h-5" />
                                        </div>
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder={editingUserId ? "••••••••" : "Password"}
                                            required={!editingUserId}
                                            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    {editingUserId && <p className="text-[10px] text-slate-400 italic">Leave blank to keep current password.</p>}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-sm font-bold text-slate-900">Assigned Roles</h3>
                                    <button type="button" onClick={addRole} className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
                                        <HiOutlinePlus className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                    {formData.roles.map((role, index) => (
                                        <div key={index} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-3 relative group/role">
                                            {formData.roles.length > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeRole(index)}
                                                    className="absolute -right-2 -top-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover/role:opacity-100 transition-opacity shadow-lg"
                                                >
                                                    <HiOutlineX className="w-3 h-3" />
                                                </button>
                                            )}
                                            
                                            <div className="space-y-1">
                                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Business</label>
                                                <select
                                                    value={role.business}
                                                    onChange={e => handleRoleChange(e, index, 'business')}
                                                    required
                                                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold outline-none focus:border-indigo-500 transition-all"
                                                >
                                                    <option value="">Select Business</option>
                                                    {businesses.map(b => (
                                                        <option key={b._id} value={b._id}>{b.name}</option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</label>
                                                    <select
                                                        value={role.role}
                                                        onChange={e => handleRoleChange(e, index, 'role')}
                                                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold outline-none focus:border-indigo-500 transition-all"
                                                    >
                                                        <option value="admin">Admin</option>
                                                        <option value="manager">Manager</option>
                                                        <option value="cashier">Cashier</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-1">
                                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Branch</label>
                                                    <select
                                                        value={role.branch}
                                                        onChange={e => handleRoleChange(e, index, 'branch')}
                                                        disabled={!role.business}
                                                        className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold outline-none focus:border-indigo-500 transition-all disabled:opacity-50"
                                                    >
                                                        <option value="">All Branches</option>
                                                        {(branchOptions[index] || []).map(br => (
                                                            <option key={br._id} value={br._id}>{br.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                                <button type="submit" className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95">
                                    {editingUserId ? 'Update Account' : 'Create Account'}
                                </button>
                                {editingUserId && (
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>

                {/* LIST SECTION */}
                <div className="lg:col-span-2">
                    <div className="card-modern overflow-hidden">
                        <div className="px-8 py-6 bg-slate-50/50 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">Active Users</h2>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{users.length} Registered Users</span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50/30 border-b border-slate-100">
                                        <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Identity</th>
                                        <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Access Roles</th>
                                        <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {users.map(u => (
                                        <tr key={u._id} className="hover:bg-indigo-50/10 transition-colors group">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                                        {u.fullName.charAt(0)}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-slate-900 leading-tight">{u.fullName}</p>
                                                        <p className="text-xs text-slate-500 mt-1">{u.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5">
                                                <div className="flex flex-wrap gap-1.5 max-w-md">
                                                    {u.roles.map((r, i) => (
                                                        <div key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] font-bold shadow-sm">
                                                            <span className="text-indigo-600 uppercase">{r.role}</span>
                                                            <span className="mx-1 text-slate-300">•</span>
                                                            <span className="text-slate-600">{r.business?.name || r.business}</span>
                                                            {r.branch?.name && <span className="text-slate-400 ml-1">({r.branch.name})</span>}
                                                        </div>
                                                    ))}
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                    <button onClick={() => handleEdit(u)} className="p-2 text-slate-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all" title="Edit User">
                                                        <HiOutlinePencilAlt className="w-5 h-5" />
                                                    </button>
                                                    <button onClick={() => handleDelete(u._id)} className="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all" title="Delete User">
                                                        <HiOutlineTrash className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserCreatePage;
