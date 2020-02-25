var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

  console.log("hello");
  console.log(req);


  res.sendFile('/signup.html' , { root : "./public"})

});

router.get('/', function(req, res, next) {

  console.log("hello");

  


  res.sendFile('/signup.html' , { root : "./public"})

});




module.exports = router;
