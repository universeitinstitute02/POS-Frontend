
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BusinessPage() {
  const API_URL = "https://mern-pos-backend.vercel.app/api/businesses";
  const TOKEN = localStorage.getItem('token');

  const axiosConfig = {
    headers: {

      Authorization: `Bearer ${TOKEN}`,
    },
  };

  const [businesses, setBusinesses] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "" });
  const [editId, setEditId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  // API calls with token
  const getBusinesses = () => axios.get(API_URL, axiosConfig);
  const createBusiness = (data) => axios.post(API_URL, data, axiosConfig);
  const updateBusiness = (id, data) =>
    axios.put(`${API_URL}/${id}`, data, axiosConfig);
  const deleteBusiness = (id) =>
    axios.delete(`${API_URL}/${id}`, axiosConfig);

  const fetchBusinesses = async () => {
    setLoading(true);
    try {
      const res = await getBusinesses();
      setBusinesses(res.data);
    } catch (err) {
      console.error("Error fetching businesses:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBusinesses();
  }, []);

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
        await updateBusiness(editId, formData);
      } else {
        await createBusiness(formData);
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
      await deleteBusiness(id);
      fetchBusinesses();
    } catch (err) {
      console.error("Error deleting business:", err);
    }
  };

  return (
    <>
      <div className="p-8 max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Businesses</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => openModal()}
          >
            Add Business
          </button>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : businesses.length === 0 ? (
          <p>No businesses found.</p>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Description</th>
                  <th className="p-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {businesses.map((biz) => (
                  <tr key={biz._id} className="border-b">
                    {/* <td className="p-3">{biz.name}</td> */}
                    <Link to={`/pos-branch/${biz._id}`}>{biz.name}</Link>
                    <td className="p-3">{biz.description || "-"}</td>
                    <td className="p-3 text-center space-x-2">
                      <button
                        className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                        onClick={() => openModal(biz)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() => handleDelete(biz._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">
                {editId ? "Edit Business" : "Add Business"}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="border p-3 w-full rounded"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                <textarea
                  placeholder="Description"
                  className="border p-3 w-full rounded"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    {editId ? "Update" : "Create"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="p-8 max-w-5xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">User Create</h1>
        <Link to="/pos-usercreation" className="bg-customRed p-2 text-white rounded-lg"
        >
          Add User
        </Link>
      </div>
    </>

  );
}
