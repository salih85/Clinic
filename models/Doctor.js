const mongoose = require('mongoose');

const dSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Doctor', dSchema);
