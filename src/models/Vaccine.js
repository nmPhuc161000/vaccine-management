const mongoose = require('mongoose');

const vaccineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    recommendedAge: { type: Number, required: true }, // Độ tuổi khuyến nghị (tháng)
});

module.exports = mongoose.model('Vaccine', vaccineSchema);