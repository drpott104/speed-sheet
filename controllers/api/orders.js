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
        const orders = await Order.find({user: req.user._id, isStaged: true})
        res.status(200).json(orders)
    } catch(err) {
        res.status(400).json(err)
    }
}

async function create(req, res) {
    try {
        console.log(req.user)
        req.body.user = req.user._id
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
    index,
    create,
    getAll
}