const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    roomNum: { type: Number },
    currentOrder: { type: Array },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    isStaged: { type: Boolean, default: false },
    isDelivered: { type: Boolean, default: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);