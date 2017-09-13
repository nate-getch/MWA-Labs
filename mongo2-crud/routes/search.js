var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

const pg_title = "Search Location";
const url = "mongodb://localhost:27017/mydb";
let error = null;

/* GET search page. */
router.get('/', function(req, res, next) {
  
  res.render('search', { title: pg_title, error: null, result: null })

  /*
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    
    db.collection("location_points").find({}).toArray(function(err, result) {
      if (err) throw err;
      //console.log(result);
      res.render('index', { title: pg_title, result: result })
      db.close();
    });

  });
  */
});

module.exports = router;
