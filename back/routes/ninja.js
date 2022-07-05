const express = require('express');
const router = express.Router();
const request = require('request');
const config = require('config');
const auth = require('../middleware/auth');

router.get('/animals/:name',auth,(req,res) => {
    const name = req.params.name
    request.get({
        url:`https://api.api-ninjas.com/v1/animals?name=${name}`,
        headers: {
            'X-Api-Key': config.get('ninjaKey')
          }
    }, (err, res, body) => {
        if(err) {
            return console.error('Request failed:', err);
        } 
        else if(res.statusCode != 200) {
            return console.error('Error:', res.statusCode, body.toString('utf8'));
        } 
        else {
            console.log(body)
        } 
    })
})


module.exports = router;