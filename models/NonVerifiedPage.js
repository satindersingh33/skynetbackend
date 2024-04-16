const mongoose = require('mongoose');
const nonVerifiedPageSchema = new mongoose.Schema({
  entry: 
  { type: String,
     required: true },

  purpose:
   { type: String, 
    required: true },

  houseno: 
  { type: String, 
    required: true },

    generalPhoto: {
      data: Buffer,
      contentType: String
    },
    aadhaarPhoto: {
      data: Buffer,
      contentType: String
    }
 
 
  
})


const NonVerifiedPage = mongoose.model('NonVerifiedPage', nonVerifiedPageSchema);

module.exports = NonVerifiedPage;
