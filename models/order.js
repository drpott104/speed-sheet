const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    roomNum: { type: Number, required: true },
    order: { type: Array, required: true }
});

module.exports = mongoose.model('Order', orderSchema);