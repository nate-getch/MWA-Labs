var express = require('express');
var fetch = require('node-fetch');
var Rx = require('rxjs');
var router = express.Router();

const fetchUserData = function (){
  let d = fetch('http://jsonplaceholder.typicode.com/users/')
  .then(function(res) {
      return res.json();
  })
  .catch(function(err) {
    console.log(err);
  });
  return d;
}

// using observable
router.get('/rx', function(req, res, next) {
  Rx.Observable.fromPromise(
    fetchUserData()
  )
  .subscribe(
    d => res.render('users', { userdata: d, method: 'Observable' }) , 
    err => console.error(err),
    () => console.log('done')
  )
});

// using promise, default fetch
/* GET users listing. */
router.get('/', function(req, res, next) {
  fetch('http://jsonplaceholder.typicode.com/users/')
  .then ( userdata => { return userdata.json() } )
  .then( userdata => res.render('users', { userdata: userdata, method: 'Promise' }) )
  .catch( err => console.log(err));
});

module.exports = router;
