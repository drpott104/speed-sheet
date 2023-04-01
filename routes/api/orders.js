const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', ordersCtrl.getOrder)
router.get('/orders', ordersCtrl.orderHistory)
router.post('/', ordersCtrl.create)

module.exports = router;