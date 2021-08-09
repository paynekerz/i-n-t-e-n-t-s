const router = require('express').Router();
const nps = require('./nps')

router.use('/search', nps);

module.exports = router;