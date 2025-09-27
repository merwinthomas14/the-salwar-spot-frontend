import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/dashboard');
    } catch {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Team Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="username" value={form.username} onChange={handleChange} placeholder="Username" className="w-full p-2 border" />
        <input name="password" type="password" value={form.password} onChange={handleChange} placeholder="Password" className="w-full p-2 border" />
        <button type="submit" className="bg-blue-900 text-white px-4 py-2">Login</button>
      </form>
    </div>
  );
};

export default Login;
