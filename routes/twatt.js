var con = require('../controllers/twatt')
var router = require('express').Router()

router.get('/rilis1', con.rilis1)
router.get('/rilis2', con.rilis2)
router.get('/rilis3/:city', con.rilis3)
router.post('/rilis4', con.rilis4)

module.exports = router;
