const axios = require("axios");
const config = require("config");

async function getImageFromType(name) {
    try {
        const response = await axios.get(`https://api.the${name}api.com/v1/images/search`,
            {
                headers: {
                    'X-Api-Key': config.get(`${name}Key`)
                }
            });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = { getImageFromType }