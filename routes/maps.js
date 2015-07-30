/**
 * Created by apple on 7/30/15.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('MAP...startcat here');
});

router.get('/location', function(req, res, next) {
    res.send('LOCATION...startcat here');
});



module.exports = router;