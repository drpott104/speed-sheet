const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/currentCart', ordersCtrl.getCurrentCart)
router.get('/pastOrders', ordersCtrl.getPastOrders)
router.post('/', ordersCtrl.create)

module.exports = router;