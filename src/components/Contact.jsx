import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full p-2 border" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border" />
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" className="w-full p-2 border" />
        <button type="submit" className="bg-blue-900 text-white px-4 py-2">Send</button>
      </form>
    </div>
  );
};

export default Contact;
