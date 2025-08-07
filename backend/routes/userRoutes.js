// routes/userRoutes.js
import express from 'express';
import { User } from '../models/userModel.js';

const router = express.Router();

// Separate function: Create user
// router.post('/', async (req, res) => {
const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ message: 'Error saving user', error: err.message });
    }
};


// Separate function: Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving users', error: err.message });
    }
};

// Routes using the functions
router.post('/', createUser);      // POST /api/v1/users
router.get('/', getAllUsers);      // GET /api/v1/users

export default router;
