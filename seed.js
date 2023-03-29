require('dotenv').config();
require('./config/database');

const Item = require('./models/item');
const Menu = require('./models/menu');

(async function() {
    // delete outlets before creating new ones ???
    await Menu.deleteMany({})
    const menus = await Menu.create([
        {name: 'Breakfast', sortOrder: 1},
        {name: 'Lunch', sortOrder: 2},
        {name: 'Dinner', sortOrder: 3},
        {name: 'Wine', sortOrder: 4}
    ])

    await Item.deleteMany({})
    const items = await Item.create([
        {name: 'Avocado Toast', menu: menus[0], description: 'smashed avocado, parmesan cheese, poached egg'},
        {name: 'French Toast', menu: menus[0], description: 'bruleed banana, vanilla cream, puffed amaranth'},
        {name: 'Chilaquiles', menu: menus[0], description: 'pulled chicken, salsa verde, cotija, crema'},
        {name: 'Smash Burger', menu: menus[1], description: 'caramelized onions, american cheese'},
        {name: 'Jidori Chicken', menu: menus[1], description: 'ciabatta, tzatziki, local salad'},
        {name: 'Steak Frites', menu: menus[1], description: 'hanger steak, hand cut fries'},
        {name: 'Halibut', menu: menus[2], description: 'corn, fennel, caviar'},
        {name: 'Pork Chop', menu: menus[2], description: 'apple, mustard seed'},
        {name: 'Strip Loin', menu: menus[2], description: 'wagyu, cauliflower, peppercorn'},
        {name: 'Pinot Noir Les Caprices', menu: menus[3]},
        {name: 'Syrah Eisele Vineyard', menu: menus[3]},
        {name: 'Cabernet Sauvignon- Sangiovese Solaia', menu: menus[3]}
    ])

    process.exit();

})();