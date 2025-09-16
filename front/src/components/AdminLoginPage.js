import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLoginPage.css'; // import CSS

const AdminLoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (form.email === "admin@admin.com" && form.password === "Admin@123") {
      alert("Admin login successful");
      navigate('/admin');
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <div className="admin-login-wrapper">
      <div className="admin-login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Admin Email" value={form.email} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Admin Password" value={form.password} onChange={handleChange} required />
          <button type="submit">Login as Admin</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
