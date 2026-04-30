"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

import { HiOutlineOfficeBuilding, HiOutlinePlus, HiOutlinePencil, HiOutlineTrash, HiOutlineUserAdd } from "react-icons/hi";

export default function BusinessPage() {
  const API_URL = "https://mern-pos-backend.vercel.app/api/businesses";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [businesses, setBusinesses] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [editId, setEditId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchBusinesses = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const res = await axios.get(API_URL, axiosConfig);
      setBusinesses(res.data);
    } catch (err) {
      console.error("Error fetching businesses:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBusinesses();
  }, [token]);

  const openModal = (business = null) => {
    if (business) {
      setFormData({
        name: business.name,
        description: business.description || "",
      });
      setEditId(business._id);
    } else {
      setFormData({ name: "", description: "" });
      setEditId(null);
    }
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormData({ name: "", description: "" });
    setEditId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`${API_URL}/${editId}`, formData, axiosConfig);
      } else {
        await axios.post(API_URL, formData, axiosConfig);
      }
      closeModal();
      fetchBusinesses();
    } catch (err) {
      console.error("Error saving business:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this business?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`, axiosConfig);
      fetchBusinesses();
    } catch (err) {
      console.error("Error deleting business:", err);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Businesses</h1>
          <p className="text-slate-500 mt-1">Manage your business entities and organizations.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/pos-usercreation" className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 shadow-sm transition-all">
            <HiOutlineUserAdd className="w-5 h-5 text-indigo-600" />
            Add User
          </Link>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all"
          >
            <HiOutlinePlus className="w-5 h-5" />
            Add Business
          </button>
        </div>
      </div>

      <div className="card-modern overflow-hidden">
        {loading ? (
          <div className="p-12 flex flex-col items-center justify-center space-y-4">
            <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-slate-500">Loading businesses...</p>
          </div>
        ) : businesses.length === 0 ? (
          <div className="p-12 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 mb-4">
              <HiOutlineOfficeBuilding className="w-10 h-10" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">No businesses found</h3>
            <p className="text-slate-500 mt-1 max-w-xs mx-auto">Get started by creating your first business entity.</p>
            <button onClick={() => openModal()} className="mt-6 text-indigo-600 font-bold hover:underline">Create Business Now</button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-b border-slate-100">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Business Name</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {businesses.map((biz) => (
                  <tr key={biz._id} className="hover:bg-indigo-50/30 transition-colors group">
                    <td className="px-6 py-4">
                      <Link href={`/pos-branch/${biz._id}`} className="flex items-center gap-3 group/link">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover/link:bg-indigo-600 group-hover/link:text-white transition-all shadow-sm">
                          <HiOutlineOfficeBuilding className="w-4 h-4" />
                        </div>
                        <span className="font-bold text-slate-900 group-hover/link:text-indigo-600 transition-colors">{biz.name}</span>
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-slate-500 max-w-md truncate">{biz.description || "No description provided."}</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => openModal(biz)}
                          className="p-2 rounded-lg text-slate-400 hover:text-amber-600 hover:bg-amber-50 transition-all"
                          title="Edit"
                        >
                          <HiOutlinePencil className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(biz._id)}
                          className="p-2 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-all"
                          title="Delete"
                        >
                          <HiOutlineTrash className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="relative w-full max-w-md card-modern p-8 shadow-2xl scale-in duration-300">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {editId ? "Edit Business" : "Create New Business"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Business Name</label>
                <input
                  type="text"
                  placeholder="e.g. Acme Corporation"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all font-medium"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Description</label>
                <textarea
                  placeholder="Short description of the business..."
                  rows="3"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all resize-none font-medium"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  className="px-6 py-2.5 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all"
                >
                  {editId ? "Update Business" : "Create Business"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
