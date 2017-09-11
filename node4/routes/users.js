var express = require('express');
var fetch = require('node-fetch');
var Rx = require('rxjs');
var router = express.Router();

const apiAddr = 'http://jsonplaceholder.typicode.com/users/';

const fetchUserDataAsync = async function () {
  let d;
  try {
    d = await fetch(apiAddr);
  } catch (err) {
    throw err;
  }

  return d;
}

// using async and await
router.get('/async', function (req, res) {
  fetchUserDataAsync()
    .then(d => { return d.json() })
    .then(d => res.render('users', { userdata: d,  method: 'Async & Await'  }))
    .catch(function (err) {
      console.log(err);
    });
});

// using observable
router.get('/rx', function (req, res, next) {
  Rx.Observable.fromPromise( fetch(apiAddr)  )
    .flatMap( d=> d.json())
    .subscribe(
      d => res.render('users', {userdata: d, method: 'Observable' }),
      err => console.error(err),
      () => console.log('done')
    )
});

// using promise, default fetch
/* GET users listing. */
router.get('/', function (req, res, next) {
  fetch(apiAddr)
    .then(userdata => { return userdata.json() })
    .then(userdata => res.render('users', { userdata: userdata, method: 'Promise'}))
    .catch(err => console.log(err));
});

module.exports = router;