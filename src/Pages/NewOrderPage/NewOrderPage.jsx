import './NewOrderPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Menus from '../../components/Menus/Menus';
import MenuItems from '../../components/MenuItems/MenuItems';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import * as orderAPI from "../../utilities/order-api";

export default function NewOrderPage({ user, menus, menuItems, activeItems, setActiveItems, currentOrder, setCurrentOrder, orderHistory, setOrderHistory }) {
  const [enterOrder, setEnterOrder] = useState({
    roomNum: '',
    currentOrder: []
  })
  
  function handleSubmitOrder(evt) {
    console.log('submit order', enterOrder)
    evt.preventDefault();
    enterOrder.isStaged = true
    console.log(enterOrder, 'new order')
    newOrder(enterOrder);
  }

  async function newOrder(orderData) {
    const newOrder = await orderAPI.addOrder(orderData, currentOrder);
    setOrderHistory([...orderHistory, newOrder])
    console.log(orderHistory, 'order history')
  }
  
  function handleChangeOrder(evt) {
    console.log(currentOrder)
    setEnterOrder({...enterOrder, [evt.target.name]: evt.target.value, currentOrder})
  }

  function handleChangeMenu(name) {
    const currentItems = menuItems.filter(i => i.menu.name === name)
    setActiveItems(currentItems)
  }
  
  function handleAddToOrder(itemId) {
    const orderItem = activeItems.filter(i => i._id === itemId)
    setCurrentOrder([...currentOrder, ...orderItem])
  }
  
  const order = currentOrder.map(item => (
    <OrderDetails item={item} key={item._id} />
  ))

  const activeMenuItems = activeItems.map(item => (
    <MenuItems item={item} key={item._id} handleAddToOrder={handleAddToOrder} />
  ))

  const allMenus = menus.map(menu => (
    <Menus menu={menu} key={menu._id} handleChangeMenu={handleChangeMenu} />
  ))

  return (
    <>
      <h1>New Order</h1>
      <main className='NewOrderPage'>
        <aside>
          <h2>Menus</h2>
          <ul className='menus'>{allMenus}</ul>
          {/* <ul>
            { user.name === 'Admin' && <Link to="/menus/edit">Edit Menus</Link> }
          </ul> */}
        </aside>
        <div>
          <h2>Menu Items</h2>
          <ul>{activeMenuItems}</ul>
        </div>
        <div>
          <h2>Current Order</h2>
          <form>
            <label>Room Number:</label>
            <input type="text" 
              name="roomNum"
              value={enterOrder.roomNum}
              onChange={handleChangeOrder}
            />
            <ul>{order}</ul>
            <button onClick={handleSubmitOrder}>Submit Order</button>
          </form>
        </div>
      </main>
    </>
  );
}