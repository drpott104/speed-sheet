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

async function getPastOrders(req, res) {
    try {
        console.log(req.user)
        const orderHistory = await Order.find({user: req.user._id, isStaged: true})
        console.log(orderHistory, 'order history from controller')
        res.status(200).json(orderHistory)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        // req.body.user = req.user.id
        const newOrder = await Order.create(req.body)
        res.json(newOrder)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function getAll(req, res) {
    const orders = await Order.find({})
}

module.exports = {
    getCurrentCart,
    getPastOrders,
    create,
    getAll
}