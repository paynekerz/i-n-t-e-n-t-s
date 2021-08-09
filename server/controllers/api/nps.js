const router = require('express').Router();
const axios = require('axios').default;

router.get('/', async (req, res) => {
    try {
        const stateCode = req.query.statecode;

        const getParksByState = await axios.get(
            `https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&api_key=${process.env.NPS_API_KEY}`
        );
        res.json(getParksByState.data.results);
    } catch (err) {
        res.status(404).json(err);
    }
});

module.exports = router;