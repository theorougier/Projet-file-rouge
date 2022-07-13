const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
const facts = require('../src/getFacts');
const images = require('../src/getImages');

async function call(type) {
    switch (type) {
        case 'catFact' :
            return await facts.getCatFact();
        case 'catImage' :
            return await images.getImageFromType("cat");
        case 'dogImage' :
            return await images.getImageFromType("dog");
        case 'randomFact' :
        default :
            return await facts.getRandomFact();
    }
}

router.get('/', auth,async (req, res) => {
    let type = req.body.type;
    console.log(call(type));
    return res.json(await call(type));
})


module.exports = router;