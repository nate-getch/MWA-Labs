var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var csrf = require('csurf');
var path = require('path');

var router = express.Router();

// setup route middlewares 
var csrfProtection = csrf({ cookie: true });
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var url = "mongodb://localhost:27017/mydb";

// create collection
/*MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("location_points", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});*/

let error = null;
const pg_title = "Add Location Point";

router.post('/', csrfProtection, urlencodedParser, 
  // validate form
  function(req, res, next) {
    req.checkBody('name', 'required field').notEmpty();
    req.checkBody('category', 'required field').notEmpty();
    req.checkBody('long', 'required field').notEmpty();
    req.checkBody('lat', 'required field').notEmpty();
    const err = req.validationErrors(true );    

    if(err || req.session.csrfToken !== req.body._csrf ){
      req.session.csrfToken = req.csrfToken();
      res.render('add', {title: pg_title, error:"All input fields are Required!", csrfToken: req.session.csrfToken });
    }
    else{
      return next();
    }
  
  },
  // save to db and redirect
  function(req, res) {
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var myobj = { name: req.body.name, category: req.body.category, location: [parseFloat(req.body.long), parseFloat(req.body.lat) ] };
      db.collection("location_points").insertOne(myobj, function(err, result) {
        if (err) throw err;
        //console.log("1 document inserted");
        db.close();
        res.redirect('/');
      });
    });
  }
);

/* GET add form */
router.get('/', csrfProtection, function(req, res, next) {
  
  req.session.csrfToken = req.csrfToken();
  res.render('add', {title: pg_title, error:null, csrfToken: req.session.csrfToken });
});

module.exports = router;