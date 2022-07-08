const express = require('express');
const router = express.Router();
const axios = require('axios')
const config = require('config');
const auth = require('../middleware/auth');

router.get('/ninjafact',auth,(req,res) => {
    const getFact = async () => {
        try {
            const response = await axios.get(`https://api.api-ninjas.com/v1/facts`,
            {
            headers: {
                'X-Api-Key': config.get('ninjaKey')
              }
            });
            return res.json(response.data);
        } catch (error) {
            console.error(error);
        }

    }
    getFact();
})

router.get('/cat', auth,(req,res)=> {
    const getCatFact = async () => {
        try {
            const response = await axios.get(`https://catfact.ninja/fact`);
            return res.json(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    getCatFact();
})

router.get('/norris', auth,(req,res)=> {
    const getCatFact = async () => {
        try {
            const response = await axios.get(`https://api.chucknorris.io/jokes/random`);
            return res.json(response.data.value);
        } catch (error) {
            console.error(error);
        }
    }
    getCatFact();
})


module.exports = router;