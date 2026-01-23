const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Course code is required'],
    uppercase: true
  },
  name: {
    type: String,
    required: [true, 'Course name is required']
  },
  description: String,
  semester: Number,
  credits: {
    type: Number,
    default: 3
  },
  syllabus: String,
  department: String,
  isElective: {
    type: Boolean,
    default: false
  },
  faculty: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Faculty'
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

// Update timestamp
courseSchema.pre('save', function() {
  this.updatedAt = new Date();
});

module.exports = mongoose.model('Course', courseSchema);