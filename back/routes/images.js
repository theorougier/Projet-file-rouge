const express = require('express');
const router = express.Router();
const axios = require('axios')
const config = require('config');
const auth = require('../middleware/auth');

router.get('/:name',auth,(req,res) => {
    const name = req.params.name
    const getImage = async () => {
        try {
            const response = await axios.get(`https://api.the${name}api.com/v1/images/search`,
            {
            headers: {
                'X-Api-Key': config.get(`${name}Key`)
              }
            });
            return res.json(response.data);
        } catch (error) {
            console.error(error);
        }

    }
    getImage();
})


module.exports = router;