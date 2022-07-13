const axios = require("axios");
const config = require("config");

const getRandomFact = async () => {
    try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/facts`,
            {
                headers: {
                    'X-Api-Key': config.get('ninjaKey')
                }
            });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

const getCatFact = async () => {
    try {
        const response = await axios.get(`https://catfact.ninja/fact`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getRandomFact, getCatFact }