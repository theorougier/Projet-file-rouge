const express = require('express');
const router = express.Router();
const axios = require('axios')
const config = require('config');
const auth = require('../middleware/auth');

router.get('/animals/:name',auth,(req,res) => {
    const name = req.params.name
    const getAnimal = async () => {
        try {
            const response = await axios.get(`https://api.api-ninjas.com/v1/animals?name=${name}`,
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
    getAnimal();
})

router.get('/catfact', auth,(req,res)=> {
    const getCatFact = async () => {
        try {
            const response = await axios.get(`https://catfact.ninja/fact`);
            console.log(response,'cest la reponse')
            return res.json(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    getCatFact();
})


module.exports = router;