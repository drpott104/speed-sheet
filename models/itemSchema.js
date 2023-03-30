const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
    name: { type: String, required: true },
    menu: {},
    description: { type: String }
});

module.exports = itemSchema