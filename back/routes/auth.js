const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route POST api/auth
// @desc Auth user & get token
// @access Public

router.post('/', async(req,res) => {
    const {email, password} = req.body
    try {
        let user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({msg:'Invalide credentials'})
        }

        if(!(await bcrypt.compare(password,user.password))) {
            return res.status(400).json({msg:'Invalide credentials'})
        }

        const payload = {
            user: {
                id: user.id,
            }
        };
        jwt.sign(
            payload,
            config.get('jwtSecret'),
            {
                expiresIn:360000
            },
            (err, token) => {
                if(err) throw err;
                res.json({token})
            }
        );
    } catch (error) {
     console.error(error.message);
     res.status(500).send('Server error')
    }
});
// TODO remove this route after
router.get('/coucou', (req, res)=> {
    res.json('hibou');
})

module.exports = router;