var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lingyis TEST PAGE' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.post('/login', function(req, res, next) {
  var user={
    username:'admin',
    password:'admin'
  };
  if(req.body.username===user.username && req.body.password===user.password){
    res.redirect('/home');
  }
  res.redirect('/login');

});

router.get('/logout', function(req, res, next) {

  res.redirect('/');
});




router.get('/home',function(req,res,next){
  var user={
    username:'admin',
    password:'admin'
  };
  res.render('home',{title: 'Home Page', user:user});
});

/*
router.get('/users', function(req, res, next) {

    res.send('I am star cat');
});

*/
module.exports = router;
