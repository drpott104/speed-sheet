const express = require('express');
const router = express.Router();
const menusCtrl = require('../../controllers/api/menus');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.get('/', menusCtrl.index)
router.get('/items', menusCtrl.getItems)

module.exports = router;