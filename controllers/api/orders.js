const Order = require('../../models/order');
const User = require('../../models/user');

async function getCurrentCart(req, res) {
    try {
        const currentCart = await Order.find({user: req.user._id, isStaged: false})
        res.status(200).json(currentCart)
    } catch(err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try {
        const orders = await Order.find({user: req.user._id})
        res.status(200).json(orders)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        req.body.user = req.user._id
        const newOrder = await Order.create(req.body)
        res.json(newOrder)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function deleteOrder(req, res) {
    try {
        await Order.findByIdAndDelete(req.params.id)
    } catch (err) {
        res.status(400).json(err)
    }
}

async function deliverOrder(req, res) {
    try {
        const order = await Order.findById(req.params.id)
        order.isStaged = false
        order.isDelivered = true
        order.save()
        res.json(order)
    } catch (err) {
        res.status(400).json(err)
    }
}

module.exports = {
    getCurrentCart,
    index,
    create,
    deleteOrder,
    deliverOrder
}