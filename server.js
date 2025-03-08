const express = require('express');
const cors = require('cors');
const connectDB = require('./src/config/db');
const childRoutes = require('./src/routes/childRoutes');
const appointmentRoutes = require('./src/routes/appointmentRoutes');
const authRoutes = require('./src/routes/authRoutes');
const setupSwagger = require('./swagger'); // Import Swagger

const app = express();
const PORT = process.env.PORT || 5000;

// Kết nối MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/children', childRoutes);
app.use('/api/appointments', appointmentRoutes);

// Cấu hình Swagger
setupSwagger(app);

// Export app cho Vercel
module.exports = app; // Thay vì app.listen()