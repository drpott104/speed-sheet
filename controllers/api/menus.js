const Menu = require('../../models/menu');
const Item = require('../../models/item');

async function index(req, res) {
    try {
        const menus = await Menu.find({})
        res.status(200).json(menus)
    } catch(err) {
        res.status(400).json(err);
    }
}

async function getItems(req, res) {
    try {
        const items = await Item.find({})
        res.status(200).json(items)
    } catch(err) {
        res.status(400).json(err);
    }
}

module.exports = {
    index,
    getItems
}