const express = require('express');
const router = express.Router();
const User = require('../models/UserModel');

// Register User
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Login User/Admin
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Admin fixed credentials
  if(email === "admin@admin.com" && password === "Admin@123") {
    return res.json({ role: 'admin', message: 'Admin login successful' });
  }

  // Normal User
  const user = await User.findOne({ email, password });
  if(!user) return res.status(400).json({ error: 'Invalid credentials' });

  res.json({ role: 'user', message: 'User login successful', user });
});

// Get all users for Admin
router.get('/', async (req, res) => {
  try {
    // Fetch all users and return email + registration time (_id has timestamp)
    const users = await User.find({}, 'name email createdAt'); // only select name, email, createdAt
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

module.exports = router;
