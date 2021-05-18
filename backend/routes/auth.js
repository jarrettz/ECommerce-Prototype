const express = require('express');
const { update } = require('../models/user');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');

// Create a user
router.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new User({ 
      username: req.body.username ,
      password: hashedPassword
    })
  
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

// Login
router.post('/login', async (req, res) => {
  let user;
  await User.findOne({username: req.body.username}, (err,obj) => {
    console.log(obj); 
    user = obj;
  });
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if (await bcrypt.compare(req.body.password, user.password)) {
      res.status(200).send(user)
    } else {
      res.status(400).send('Incorrect Password')
    }
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
});

module.exports = router;