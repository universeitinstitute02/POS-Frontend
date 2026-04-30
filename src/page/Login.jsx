import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../axiospublic';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await api.post('login', { email, password });
      const { token, user } = res.data;

      // Save token and user info in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirect to POS home or dashboard
      navigate('/pos-business');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <>
      <div className="border-t-[1px] border-b-[1px] border-[#4F4F4F] mt-2">
        <div className="flex justify-center pt-8 pb-24">
          <div className="border-[1px] border-[#4F4F4F]">
            <form onSubmit={handleSubmit} className="p-12 text-xs text-blue-500">
              <div className="flex mb-2">
                <label htmlFor="email" className="pr-2">Your User Id</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="border-[1px] border-[#4F4F4F] focus:bg-yellow-300"
                  required
                />
                <span className="text-[#800000]">@goldmark.com</span>
              </div>
              <div className="flex mb-2">
                <label htmlFor="password" className="pr-2">Your Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  className="border-[1px] border-[#4F4F4F] w-48 focus:bg-yellow-300"
                  required
                />
              </div>

              {error && <p className="text-red-600 mb-2">{error}</p>}

              <div className="flex justify-center mb-4">
                <button type="submit" className="bg-blue-600 px-4 py-1 text-sm text-white">
                  Sign In
                </button>
              </div>

              <div>
                <div className="flex mb-1">
                  <p className="text-[#9BACC7]">If you have forgotten your password, click on</p>
                  <span className="bg-blue-600 px-2 ml-1 text-white text-sm cursor-pointer">Send Password</span>
                </div>
                <p className="text-[#9BACC7] text-center">to receive password by SMS.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="text-end text-xs">© 2024, POS.</div>
    </>
  );
};

export default Login;
