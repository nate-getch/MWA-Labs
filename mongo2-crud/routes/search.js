var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();

const pg_title = "Search Location";
const url = "mongodb://localhost:27017/mydb";
let error = null;
let long, lat;

router.post('/',
  // validte form
  function (req, res, next) {
    req.checkBody('category', 'required field').notEmpty();
    req.checkBody('longt', 'required field').notEmpty();
    req.checkBody('lat', 'required field').notEmpty();
    const err = req.validationErrors(true);

    if (err) {
      res.render('search', { title: pg_title, error: "An Error has Occured!", result: null });
    }
    else {
      return next();
    }
  },
  function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;

      let query = {
        '$and': [
          { 'location': { '$near': [parseFloat(req.body.longt), parseFloat(req.body.lat)] } },
          { 'name': { '$regex': req.body.name } },
          { 'category': { '$eq': req.body.category } }
        ]
      };
      db.collection("location_points").find(query).limit(3).toArray(function (err, result) {
        if (err) throw err;
        //console.log(result);
        res.render('search', { title: pg_title, error, result: result })
        db.close();
      });

    });
  });

/* GET search page. */
router.get('/', function (req, res, next) {
  res.render('search', { title: pg_title, error: null, result: null })
});

module.exports = router;

/*
// create index for location from mongo shell
db.location_points.createIndex( { 'location' : "2d" } );
db.location_points.getIndexes()
*/