/**
 * Created by apple on 8/4/15.
 */


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('starcat',{title:'STAR CAT'});
});

router.get('/catlove', function(req, res, next) {
    res.send('What does starcat love? Find Out!');
});



module.exports = router;