import './NewOrderPage.css';
import { useState } from 'react';
import Menus from '../../components/Menus/Menus';
import MenuItems from '../../components/MenuItems/MenuItems';
import OrderDetails from '../../components/OrderDetails/OrderDetails';
import * as orderAPI from "../../utilities/order-api";

export default function NewOrderPage({ user, menus, menuItems, activeItems, setActiveItems, currentOrder, setCurrentOrder, orderHistory, setOrderHistory }) {
  const [enterOrder, setEnterOrder] = useState({
    user: user,
    roomNum: '',
    currentOrder: []
  })
  
  function handleSubmitOrder(evt) {
    evt.preventDefault();
    enterOrder.isStaged = true
    newOrder(enterOrder);
    window.location.reload();
  }

  async function newOrder(orderData) {
    const newOrder = await orderAPI.addOrder(orderData, currentOrder);
    setOrderHistory([...orderHistory, newOrder])
  }
  
  function handleChangeOrder(evt) {
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
    <OrderDetails item={item} key={item._id} enterOrder={enterOrder} setEnterOrder={setEnterOrder} />
  ))

  const activeMenuItems = activeItems.map(item => (
    <MenuItems item={item} key={item._id} handleAddToOrder={handleAddToOrder} />
  ))

  const allMenus = menus.map(menu => (
    <Menus menu={menu} key={menu._id} handleChangeMenu={handleChangeMenu} />
  ))

  return (
    <>
      <h1>Place A New Order</h1>
      <main className='NewOrderPage'>
        <div>
          <div>
            <ul className='menus'>{allMenus}</ul>
          </div>
          <h2>Menu Items</h2>
          <ul className='menu-items'>{activeMenuItems}</ul>
        </div>
        <div className='current-order'>
          <h2>Current Order</h2>
          <form>
            <label>Room Number:</label>
            <input type="text" 
              name="roomNum"
              value={enterOrder.roomNum}
              onChange={handleChangeOrder}
            />
            <ul className='order-details'>{order}</ul>
            <button onClick={handleSubmitOrder}>Submit Order</button>
          </form>
        </div>
      </main>
    </>
  );
}