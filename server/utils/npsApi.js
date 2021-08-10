const axios = require ("axios");

require("dotenv").config();

const { NPS_API } = process.env;


async function getAllParks(stateCode){
return axios.get(`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${NPS_API}`)
}

module.exports = getAllParks;