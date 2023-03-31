const Order = require('../../models/order');

async function getOrder(req, res) {
    try {
        const items = await Order.find({})
        res.status(200).json(items)
    } catch(err) {
        res.status(400).json(err);
    }
}

async function orderHistory(req, res) {
    try {
        const orderHistory = await Order.find({})
        res.status(200).json(orderHistory)
    } catch {
        res.status(400).json(err)
    }
}

module.exports = {
    getOrder,
    orderHistory
}