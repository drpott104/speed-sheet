// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Item = require('./models/item');
const Menu = require('./models/menu');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, menu, order;
let users, items, menus, orders;
