import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPage.css'; // import CSS

const AdminPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users');
        setUsers(res.data);
      } catch (err) {
        console.error('Error fetching users:', err);
        alert('Failed to fetch users. Check backend.');
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-wrapper">
      <div className="admin-container">
        <h1>Welcome Admin</h1>
        <p>All registered users are listed below:</p>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Registered At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
