const express = require('express');
const Faculty = require('../models/Faculty');

const router = express.Router();

// GET all faculty
router.get('/', async (req, res) => {
  try {
    const faculty = await Faculty.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      count: faculty.length,
      data: faculty
    });
  } catch (error) {
    console.error('Get faculty error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching faculty'
    });
  }
});

// GET single faculty by ID
router.get('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findById(req.params.id);
    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found'
      });
    }
    res.json({
      success: true,
      data: faculty
    });
  } catch (error) {
    console.error('Get faculty by ID error:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching faculty'
    });
  }
});

// POST create new faculty
router.post('/', async (req, res) => {
  try {
    const faculty = new Faculty(req.body);
    await faculty.save();
    
    res.status(201).json({
      success: true,
      message: 'Faculty created successfully',
      data: faculty
    });
  } catch (error) {
    console.error('Create faculty error:', error);
    
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating faculty'
    });
  }
});

// PUT update faculty
router.put('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Faculty updated successfully',
      data: faculty
    });
  } catch (error) {
    console.error('Update faculty error:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating faculty'
    });
  }
});

// DELETE faculty
router.delete('/:id', async (req, res) => {
  try {
    const faculty = await Faculty.findByIdAndDelete(req.params.id);
    
    if (!faculty) {
      return res.status(404).json({
        success: false,
        message: 'Faculty not found'
      });
    }
    
    res.json({
      success: true,
      message: 'Faculty deleted successfully'
    });
  } catch (error) {
    console.error('Delete faculty error:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting faculty'
    });
  }
});

module.exports = router;
