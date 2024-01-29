const router = require('express').Router();
const places = require('../models/places.js');


// Post /places
router.post('/', (req, res) => {
  
  if (!req.body.pic) {
    // default image
    req.body.pic = 'http://placekitten.com/400/400';
  }

  if (!req.body.city) {
    req.body.city = 'Anytown';
  }

  if (!req.body.state) {
    req.body.state = 'USA';
  }

  places.push(req.body);

  res.redirect('/places');
});


// GET /places
router.get('/new', (req, res) => {
  res.render('places/new');
});


router.get('/', (req, res) => {    
    res.render('places/index', { places })
  });


module.exports = router;