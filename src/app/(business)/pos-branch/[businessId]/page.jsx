"use client";

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import apis from '@/src/app/lib/axiospublic';

import { HiOutlineMap, HiOutlinePlus, HiOutlinePencilAlt, HiOutlineTrash, HiOutlineCheck, HiOutlineX } from 'react-icons/hi';

const BranchManager = () => {
  const { businessId } = useParams();
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [branches, setBranches] = useState([]);
  const [newBranch, setNewBranch] = useState({ name: '', description: '' });
  const [editingBranchId, setEditingBranchId] = useState(null);
  const [editValues, setEditValues] = useState({ name: '', description: '' });
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    if (!businessId || !token) return;

    setLoading(true);

    apis
      .get(`businesses/${businessId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((bizRes) => {
        setBusiness(bizRes.data);

        return apis.get('branches', {
          headers: {
            Authorization: `Bearer ${token}`,
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
  }, [businessId, token]);

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await apis.post('branches', newBranch, {
        headers: {
          Authorization: `Bearer ${token}`,
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
          Authorization: `Bearer ${token}`,
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
          Authorization: `Bearer ${token}`,
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

  if (loading) return (
    <div className="flex flex-col items-center justify-center p-24 space-y-4">
      <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-sm font-medium text-slate-500 font-bold uppercase tracking-widest">Loading branches...</p>
    </div>
  );
  
  if (!business) return (
    <div className="flex flex-col items-center justify-center p-24 text-center">
      <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-4">
        <HiOutlineX className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900">Business not found</h2>
      <p className="text-slate-500 mt-2">The business you're looking for doesn't exist or you don't have access.</p>
    </div>
  );

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Manage Branches
          </h1>
          <p className="text-slate-500 mt-1 flex items-center gap-2">
            Configuring locations for <span className="text-indigo-600 font-bold">{business.name}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ADD BRANCH SECTION */}
        <div className="lg:col-span-1">
          <div className="card-modern p-8 sticky top-24">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <HiOutlinePlus className="text-indigo-600" />
              Add New Branch
            </h2>
            <form onSubmit={handleCreate} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Branch Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Downtown Branch"
                  value={newBranch.name}
                  onChange={(e) => setNewBranch({ ...newBranch, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description</label>
                <textarea
                  rows={3}
                  placeholder="Branch address or contact info..."
                  value={newBranch.description}
                  onChange={(e) => setNewBranch({ ...newBranch, description: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none font-medium"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-95"
              >
                Create Branch
              </button>
            </form>
          </div>
        </div>

        {/* LIST SECTION */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-slate-900">Existing Locations</h2>

            {branches.length === 0 ? (
              <div className="card-modern p-12 text-center">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mx-auto mb-4">
                  <HiOutlineMap className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">No branches added yet</h3>
                <p className="text-slate-500 mt-1">Start by adding your first location in the sidebar.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {branches.map((branch) => (
                  <div key={branch._id} className="card-modern p-6 group hover:border-indigo-200 transition-all">
                    {editingBranchId === branch._id ? (
                      <div className="space-y-4">
                        <input
                          value={editValues.name}
                          onChange={(e) => setEditValues({ ...editValues, name: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border border-indigo-200 rounded-lg text-sm font-bold outline-none ring-2 ring-indigo-50"
                        />
                        <textarea
                          rows={2}
                          value={editValues.description}
                          onChange={(e) => setEditValues({ ...editValues, description: e.target.value })}
                          className="w-full px-3 py-2 bg-slate-50 border border-indigo-200 rounded-lg text-sm outline-none ring-2 ring-indigo-50 resize-none"
                        />
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleUpdate(branch._id)}
                            className="flex-1 flex items-center justify-center gap-1 py-2 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-all"
                          >
                            <HiOutlineCheck /> Save
                          </button>
                          <button
                            onClick={() => setEditingBranchId(null)}
                            className="flex-1 flex items-center justify-center gap-1 py-2 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-200 transition-all"
                          >
                            <HiOutlineX /> Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col h-full">
                        <div className="flex items-start justify-between">
                          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                            <HiOutlineMap className="w-5 h-5" />
                          </div>
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={() => startEditing(branch)}
                              className="p-2 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-all"
                              title="Edit"
                            >
                              <HiOutlinePencilAlt className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(branch._id)}
                              className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                              title="Delete"
                            >
                              <HiOutlineTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                        <h3 className="mt-4 text-lg font-bold text-slate-900">{branch.name}</h3>
                        <p className="mt-2 text-sm text-slate-500 flex-grow leading-relaxed">
                          {branch.description || 'No address/description provided.'}
                        </p>
                        <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                          <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">BRANCH ID: {branch._id.slice(-6)}</span>
                          <button className="text-xs font-bold text-indigo-600 hover:underline">Select Branch →</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchManager;
