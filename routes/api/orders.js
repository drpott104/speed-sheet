const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/currentCart', ordersCtrl.getCurrentCart)
router.get('/', ordersCtrl.index)
router.post('/', ordersCtrl.create)
router.delete('/:id', ordersCtrl.deleteOrder)
router.post('/:id', ordersCtrl.deliverOrder)

module.exports = router;