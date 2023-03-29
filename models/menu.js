const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    name: { type: String, required: true },
    sortOrder: Number
});

module.exports = mongoose.model('menu', menuSchema);