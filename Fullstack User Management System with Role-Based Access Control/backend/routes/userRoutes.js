const express = require('express');
const router = express.Router();

const protect = require('../middleware/authMiddleware');
const authorize = require('../middleware/roleMiddleware');
const {
  getAllUsers,
  getProfile,
  updateProfile
} = require('../controllers/userController');

// Admin-only: list all users
router.get('/', protect, authorize('admin'), getAllUsers);

// Profile routes for logged-in users
router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

module.exports = router;
