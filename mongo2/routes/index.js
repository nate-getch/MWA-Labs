var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var url = "mongodb://localhost:27017/mydb";
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    db.collection("restaurants").findOne({}, {'restaurant_id':1, 'name':1 , 'district':1, 'cuisine':1 }, function(err, result) {
      if (err) throw err;
      console.log(result.address);
      res.render('index', { title: 'Express', result: result });
      db.close();
    });
  });


  
});

module.exports = router;
