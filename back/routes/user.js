const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

router.post('/', async(req,res) => {
const {email, password, role} = req.body;
try {
    if( await User.findOne({email})) {
        return res.status(400).json({msg:'User already exists with this email'}) 
    }
    const user = new User({
        email,
        password,
        role,
    });
    const salt = await bcrypt.genSalt();
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    res.json(user);

} catch (error) {
    console.error(err.message);
    res.status(500).send('Server erreur');  
}
});



module.exports = router;