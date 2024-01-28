const router = require('express').Router();


// GET /places
router.get('/', (req, res) => {
    let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: '/images/sports-bar-tamara-malaniy-unsplash.jpg'
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/cafe-mihai-moisa-unsplash.jpg'
    }]
    
    res.render('places/index', { places })
  });

// Photo by <a href="https://unsplash.com/@tamarushphotos?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Tamara Malaniy</a> on <a href="https://unsplash.com/photos/man-in-white-shirt-sitting-on-chair-4ec2BK0HRX8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

// Photo by <a href="https://unsplash.com/@moisamihai092?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mihai Moisa</a> on <a href="https://unsplash.com/photos/black-chairs-Djtc1T38-GY?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
    

module.exports = router;