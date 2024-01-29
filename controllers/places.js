const router = require('express').Router();
const places = require('../models/places.js');


// Post /places
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('Post place');
});


// GET /places
router.get('/new', (req, res) => {
  res.render('places/new');
});


router.get('/', (req, res) => {    
    res.render('places/index', { places })
  });


module.exports = router;