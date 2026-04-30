import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import apis from '../../axiospublic';

const BranchManager = () => {
  const { businessId } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [branches, setBranches] = useState([]);
  const [newBranch, setNewBranch] = useState({ name: '', description: '' });
  const [editingBranchId, setEditingBranchId] = useState(null);
  const [editValues, setEditValues] = useState({ name: '', description: '' });
  const TOKEN = localStorage.getItem('token');

  useEffect(() => {
    if (!businessId) return;

    setLoading(true);

    apis
      .get(`businesses/${businessId}`, {
        headers: { Authorization: `Bearer ${TOKEN}` },
      })
      .then((bizRes) => {
        setBusiness(bizRes.data);

        return apis.get('branches', {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            'x-business-id': businessId,
          },
        });
      })
      .then((branchesRes) => {
        setBranches(branchesRes.data);
      })
      .catch((err) => {
        console.error('Error:', err.response || err);
      })
      .finally(() => setLoading(false));
  }, [businessId]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await apis.post('branches', newBranch, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'x-business-id': businessId,
        },
      });
      setBranches([...branches, res.data]);
      setNewBranch({ name: '', description: '' });
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this branch?')) return;
    try {
      await apis.delete(`branches/${id}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'x-business-id': businessId,
        },
      });
      setBranches(branches.filter((branch) => branch._id !== id));
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const res = await apis.put(`branches/${id}`, editValues, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          'x-business-id': businessId,
        },
      });
      setBranches(branches.map((b) => (b._id === id ? res.data : b)));
      setEditingBranchId(null);
    } catch (err) {
      alert(err.response?.data?.error || 'Error updating branch');
    }
  };

  const startEditing = (branch) => {
    setEditingBranchId(branch._id);
    setEditValues({ name: branch.name, description: branch.description || '' });
  };

  if (loading) return <div className="text-center mt-10 text-gray-500">Loading...</div>;
  if (!business) return <div className="text-center mt-10 text-red-600">Business not found.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Manage Branches <span className="text-blue-600">({business.name})</span>
      </h1>

      {/* Create Branch */}
      <section className="bg-white p-6 rounded-md shadow mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Add New Branch</h2>
        <form onSubmit={handleCreate} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Branch Name</label>
            <input
              type="text"
              required
              value={newBranch.name}
              onChange={(e) => setNewBranch({ ...newBranch, name: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              rows={3}
              value={newBranch.description}
              onChange={(e) => setNewBranch({ ...newBranch, description: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
          >
            Create Branch
          </button>
        </form>
      </section>

      {/* List Branches */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Existing Branches</h2>

        {branches.length === 0 ? (
          <p className="text-gray-500 italic">No branches found.</p>
        ) : (
          <ul className="space-y-6">
            {branches.map((branch) => (
              <li key={branch._id} className="bg-white p-5 rounded-md shadow-sm border">
                {editingBranchId === branch._id ? (
                  <>
                    <input
                      value={editValues.name}
                      onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
                      className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <textarea
                      rows={3}
                      value={editValues.description}
                      onChange={(e) => setEditValues({ ...editValues, description: e.target.value })}
                      className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleUpdate(branch._id)}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingBranchId(null)}
                        className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 className="text-lg font-medium text-gray-800">{branch.name}</h3>
                    <p className="text-gray-600">{branch.description || 'No description provided.'}</p>
                    <div className="mt-3 flex gap-3">
                      <button
                        onClick={() => startEditing(branch)}
                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(branch._id)}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default BranchManager;
