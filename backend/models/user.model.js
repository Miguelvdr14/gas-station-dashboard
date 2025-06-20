// models/user.model.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['dueño', 'empleado'],
      default: 'empleado',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);