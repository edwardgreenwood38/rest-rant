// 
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGO_URI , {});


// export model
module.exports.Place = require('./places');
module.exports.Comment = require('./comment');
