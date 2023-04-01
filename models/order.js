const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    date: { type: Date },
    roomNum: { type: Number },
    order: { type: Array }
});

module.exports = mongoose.model('Order', orderSchema);