const mongoose =  require('mongoose');

require('./menu');
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);