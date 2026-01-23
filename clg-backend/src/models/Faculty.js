const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Faculty name is required']
  },
  designation: {
    type: String,
    required: [true, 'Designation is required']
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  },
  email: {
    type: String,
    lowercase: true
  },
  phone: String,
  qualifications: [String],
  experience: String,
  researchAreas: [String],
  image: String,
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Fixed: Remove next parameter
facultySchema.pre('save', function() {
  this.updatedAt = new Date();
});

module.exports = mongoose.model('Faculty', facultySchema);