const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

router.get('/all',auth, async(req,res) => {
    const admin = await User.findById(req.user.id).select('-password');
    try {
      if (admin.isAdmin) {
        const users = await User.find({});
        res.json(users);
      } else {
        return res.status(400).json({ msg: 'You are not a admin' });
      }
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/pong', (req, res) => {
  res.json('ping');
});

router.get('/:id', async (req, res) => {
  const admin = await User.findById(req.user.id).select('-password');
  try {
    if (admin.isAdmin) {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(400).json({ msg: 'There is no user' });
      }
      res.json(user);
    } else {
      return res.status(400).json({ msg: 'You are not a admin' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.delete('/:id', auth, async (req, res) => {
  const admin = await Users.findById(req.user.id).select('-password');
  try {
    if (admin.isAdmin) {
      await User.findOneAndRemove(req.params.id);
      res.json({ msg: 'User deleted' });
    } else {
      res.status(400).send('Your are not a admin');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;