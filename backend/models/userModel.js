// models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    profession: String,
}, { timestamps: true });

export const User = mongoose.model('User', userSchema); // ✅ named export
