const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const outletSchema = new Schema({
    name: { type: String, required: true },
    sortOrder: Number
});

modules.exports = mongoose.model('Outlet', outletSchema);