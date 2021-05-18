const express = require('express');
const router = express.Router();
const User = require('../models/user');

const users = [];

// Get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;