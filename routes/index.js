var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("hello");


  res.sendFile('/signup.html' , { root : "./public"})

});




module.exports = router;
