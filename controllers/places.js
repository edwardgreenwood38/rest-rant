const router = require('express').Router();


// GET /places
router.get('/new', (req, res) => {
  res.render('places/new');
});


router.get('/', (req, res) => {
    let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: '/images/sports-bar-tamara-malaniy-unsplash.jpg',
      photoBy: 'Tamara Malaniy',
      photoByLink: 'https://unsplash.com/@tamarushphotos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
      onLink: 'https://unsplash.com/photos/man-in-white-shirt-sitting-on-chair-4ec2BK0HRX8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/cafe-mihai-moisa-unsplash.jpg',
      photoBy: 'Mihai Moisa',
      photoByLink: 'https://unsplash.com/@moisamihai092?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
      onLink: 'https://unsplash.com/photos/black-chairs-Djtc1T38-GY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
    }]
    
    res.render('places/index', { places })
  });


module.exports = router;