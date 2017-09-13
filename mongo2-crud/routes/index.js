var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

const pg_title = "My Location Points";
const url = "mongodb://localhost:27017/mydb";

/* GET home page. */
router.get('/', function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    db.collection("location_points").find({}).toArray(function(err, result) {
      if (err) throw err;
      //console.log(result);
      res.render('index', { title: pg_title, result: result })
      db.close();
    });

  });

});

module.exports = router;
