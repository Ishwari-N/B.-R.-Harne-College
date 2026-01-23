const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware - Fixed CORS for Express 5
app.use(cors({
  origin: ['http://localhost:3000', 'http://192.168.1.19:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Import routes
const authRoutes = require('./routes/auth');
const facultyRoutes = require('./routes/faculty');
const dashboardRoutes = require('./routes/dashboard');
const courseRoutes = require('./routes/courses');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/courses', courseRoutes);

// Test route
app.get('/api/health', (req, res) => {
  res.json({ 
    success: true,
    status: 'Backend is running', 
    timestamp: new Date(),
    services: {
      database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
      authentication: 'available at /api/auth',
      faculty: 'available at /api/faculty',
      dashboard: 'available at /api/dashboard',
      courses: 'available at /api/courses'
    }
  });
});

// Simple 404 handler (no * wildcard)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🔐 Auth: http://localhost:${PORT}/api/auth`);
  console.log(`👨‍🏫 Faculty: http://localhost:${PORT}/api/faculty`);
  console.log(`📊 Dashboard: http://localhost:${PORT}/api/dashboard`);
  console.log(`📚 Courses: http://localhost:${PORT}/api/courses`);
});