var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var bodyParser = require('body-parser');
var csrf = require('csurf');

var router = express.Router();

// setup route middlewares 
var csrfProtection = csrf({ cookie: true });
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var url = "mongodb://localhost:27017/mydb";

let error = null;
const pg_title = "Manage Location Point";

router.post('/edit', csrfProtection, urlencodedParser, 
  // validate form
  function(req, res, next) {
    req.checkBody('name', 'required field').notEmpty();
    req.checkBody('category', 'required field').notEmpty();
    req.checkBody('long', 'required field').notEmpty();
    req.checkBody('lat', 'required field').notEmpty();
    const err = req.validationErrors(true );    

    if(err || req.session.csrfToken !== req.body._csrf ){
      // redefine form fields and render edit form
      req.session.csrfToken = req.csrfToken();
      var r = { name: req.body.name, category: req.body.category, location: [req.body.long, req.body.lat ] };
      res.render('edit', {title: pg_title, error:"All input fields are Required!", csrfToken: req.session.csrfToken, result:r });
    }
    else{
      return next();
    }
  
  },
  // update record in db and redirect
  function(req, res) {
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var myq = {_id: new ObjectId(req.query.id)};
      var newvalues = { '$set': { name: req.body.name, category: req.body.category, location: [parseFloat(req.body.long), parseFloat(req.body.lat) ] } };
      db.collection("location_points").updateOne(myq, newvalues, function(err, result) {
        if (err) throw err;
        //console.log("1 document updated");
        db.close();
        res.redirect('/');
      });
    });

  }
);

// delete 
router.get('/del', function(req, res, next) {
  
  if(!req.query.id)
    res.redirect('/');

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var myq = {_id: new ObjectId(req.query.id)};
    db.collection("location_points").remove(myq, function(err, obj) {
      if (err) throw err;
      //console.log("1 document deleted");
      db.close();
      res.redirect('/');
    });
  });
  
});

/* GET edit form */
router.get('/edit', csrfProtection, function(req, res, next) {
  
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var q = {_id: new ObjectId(req.query.id)};
    db.collection("location_points").findOne(q, function(err, result) {
      if (err) throw err;
      //console.log(result.name);
      db.close();
      req.session.csrfToken = req.csrfToken();
      res.render('edit', {title: pg_title, error:null, csrfToken: req.session.csrfToken, result });
    });
  });

});

module.exports = router;
