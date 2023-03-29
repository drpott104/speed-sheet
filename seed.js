require('dotenv').config();
require('./config/database');

const Item = require('./models/item');
const Category = require('./models/category');

(async function() {
    // delete outlets before creating new ones ???
    await Category.deleteMany({})
    const categories = await Category.create([
        {name: 'Breakfast', sortOrder: 1},
        {name: 'Lunch', sortOrder: 2},
        {name: 'Dinner', sortOrder: 3},
        {name: 'Wine', sortOrder: 4}
    ])

    await Item.deleteMany({})
    const items = await Item.create([
        {name: 'Avocado Toast', category: categories[0], description: 'smashed avocado, parmesan cheese, poached egg'},
        {name: 'French Toast', category: categories[0], description: 'bruleed banana, vanilla cream, puffed amaranth'},
        {name: 'Chilaquiles', category: categories[0], description: 'pulled chicken, salsa verde, cotija, crema'},
        {name: 'Smash Burger', category: categories[1], description: 'caramelized onions, american cheese'},
        {name: 'Jidori Chicken', category: categories[1], description: 'ciabatta, tzatziki, local salad'},
        {name: 'Steak Frites', category: categories[1], description: 'hanger steak, hand cut fries'},
        {name: 'Halibut', category: categories[2], description: 'corn, fennel, caviar'},
        {name: 'Pork Chop', category: categories[2], description: 'apple, mustard seed'},
        {name: 'Strip Loin', category: categories[2], description: 'wagyu, cauliflower, peppercorn'},
        {name: 'Pinot Noir Les Caprices', category: categories[3]},
        {name: 'Syrah Eisele Vineyard', category: categories[3]},
        {name: 'Cabernet Sauvignon- Sangiovese Solaia', category: categories[3]}
    ])

    process.exit();

})();