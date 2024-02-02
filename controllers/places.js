const router = require('express').Router();
const places = require('../models/places.js');


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

// GET show
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);

  if (isNaN(id)) {
    res.render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    res.render('places/show', { place: places[id], id });
  }
  
});


router.get('/', (req, res) => {    
    res.render('places/index', { places })
  });


// Post /places
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id);

  if (isNaN(id)) {
    res.render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    places.splice(id, 1);
    res.redirect('/places');
    // places.splice(id, 1);
    
  }
});


module.exports = router;