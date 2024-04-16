// verifiedPageController.js

const Verified = require('../models/verifedPages');

exports.VerifiedPurpose = async (req, res) => {
  try {
    const { maidPurpose } = req.body;

    // Validate maidPurpose (ensure it's not undefined or empty)
    if (!maidPurpose) {
      return res.status(400).json({ message: 'Maid purpose is required' });
    }

    // Create a new document using the Verified model and save to database
    const newVerifiedPurpose = new Verified({
      maidPurpose
      // Add other fields if needed
    });

    await newVerifiedPurpose.save();

    // Respond with success message
    res.status(201).json({ message: 'Maid purpose data stored successfully', verifiedPurpose: newVerifiedPurpose });
  } catch (error) {
    console.error('Failed to store maid purpose data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
