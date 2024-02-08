//
const router = require('express').Router();
const db = require('../models');


// routes
// index
router.get('/', (req, res) => {
  db.Place.find()
    .then((places) => {
      res.render('places/index', { places });
    })
    .catch(err => {
      console.log(err);
      res.render('error404');
    })
});

// new
router.post('/', (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect('/places');
    })
    .catch(err => {
      console.log('err', err);
      res.render('error404');
    })
  //res.send('POST /places stub')
})

// new
router.get('/new', (req, res) => {
  res.render('places/new')
})

// show
router.get('/:id', (req, res) => {
  //console.log(req.params.id);
  db.Place.findById(req.params.id)
    .then(place => {
      res.render('places/show', { place })
    })
    .catch(err => {
      console.log('err', err)
      res.render('error404')
    })
});

// update
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// delete
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// edit
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})


router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

//
router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})


// export model
module.exports = router
