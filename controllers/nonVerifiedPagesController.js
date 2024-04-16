const User = require('../models/NonVerifiedPage');

 // Import Mongoose model
 const imageDataBuffer = Buffer.from(imageData, 'base64');

exports.NonVerifiedPages = async (req, res) => {
  try {
    const { entry, purpose, houseno, generalPhoto ,aadhaarPhoto, } = req.body;

    if (!entry || !purpose || !houseno|| !generalPhoto || !aadhaarPhoto) {
      return res.status(400).json({ message: 'Missing required fields: entry, purpose, houseno' });
    }

    const newUser = new User({
      entry,
      purpose,
      houseno,
      generalPhoto: {
        data: imageDataBuffer,
        contentType: 'image/jpeg'
      },
      aadhaarPhoto: {
        data: aadhaarImageDataBuffer,
        contentType: 'image/jpeg'
      }
    });

    await newUser.save();

    // Respond with a success message
    res.status(201).json({ message: 'Data stored successfully', savedData: newUser });
  } catch (error) {
    console.error('Failed to process request:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
