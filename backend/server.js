

// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/v1/users', userRoutes);

// Connect to DB and start server
connectDB().then(() => {
    app.listen(8000, () => console.log('🚀 Server running on http://localhost:8000'));
});
