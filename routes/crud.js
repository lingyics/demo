/**
 * Created by apple on 8/13/15.
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('crud', { title: 'Simple CRUD with NodeJS && MySql' });
});





module.exports = router;