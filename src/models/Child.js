const mongoose = require('mongoose');

const childSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    parentName: { type: String, required: true },
    contactNumber: { type: String, required: true },
});

module.exports = mongoose.model('Child', childSchema);