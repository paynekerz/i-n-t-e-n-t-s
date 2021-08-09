import axios from "axios";
require("dotenv").config();

const { NPS_API } = process.env;


async function getAllParks(state){
`https://developer.nps.gov/api/v1/parks?stateCode=az&api_key=${NPS_API}`
}