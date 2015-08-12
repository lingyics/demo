/**
 * Created by apple on 8/4/15.
 */

var express = require('express');
var router = express.Router();


//ll
var io = require('socket.io')();
io.on('connection', function(socket){
    console.log('a user connected');
});




/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('Public Chat Room');
    res.render('chat',{ title: 'PUBLIC CHAT PAGE' });
});











router.get('/private', function(req, res, next) {
    res.send('Private Chat Room');
});



module.exports = router;