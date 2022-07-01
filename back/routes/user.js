const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

router.post('/', async(req,res) => {
const {email, password, isAdmin, preferences} = req.body;
try {
    if( await User.findOne({email})) {
        return res.status(400).json({msg:'User already exists with this email'}) 
    }
    const user = new User({
        email,
        password,
        isAdmin,
        preferences,
    });
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json(user);

} catch (error) {
    console.error(error.message);
    res.status(500).send('Server erreur');  
}
});

router.get('/:id',auth, async(req,res) => {
    const localUser = await User.findById(req.user.id).select('-password');
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
          return res.status(400).json({ msg: 'There is no user' });
        }
        if (localUser?.id === user?.id) {
          res.json(user);
        } else {
          return res.status(400).json({ msg: 'no authorization to see that' });
        }
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.put('/:id', auth, async (req, res) => {
    const localUser = await User.findById(req.user.id).select('-password');
    const {email, preferences} = req.body;
    try {
        const user = await User.findById(req.params.id).select('-password');
        if(localUser.id === user.id) {
        const updatedUser = await User.findByIdAndUpdate(user.id,{
          email: email ? email : user.email,
          preferences: {
            ...user.preferences,
            ...preferences
          }
        })
        if (!user) {
          return res.status(400).json({ msg: 'There is no user' });
        }       
         res.json(user);
        } else {
            return res.status(400).json({ msg: 'no authorization to change that' });
        }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

router.delete('/:id', auth, async (req, res) => {
    try {
        await User.findOneAndRemove(req.params.id);
        res.json({ msg: 'User deleted' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
});


module.exports = router;