const mongoose = require('mongoose');

// Define the schema for MaidPurpose
const maidPurposeSchema = new mongoose.Schema({
    maidPurpose: {
        type: String,
        required: true
      },
//   generalphoto: {
//     type: String,
//     required: true
//   },
//   imageUrl: {
//     type: String,
//     required: true
//   }
});

// Create and export the MaidPurpose model
const verified = mongoose.model('verifiedPages', maidPurposeSchema);

module.exports = verified;
