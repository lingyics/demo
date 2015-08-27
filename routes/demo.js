/**
 * Created by apple on 8/18/15.
 */
var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('GITHUB HOOK');
     res.render('demo',{ title: 'GITHUB HOOK' });
});

module.exports = router;