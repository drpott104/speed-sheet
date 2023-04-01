import './NewOrderPage.css';
import { useState } from 'react';
import Menus from '../../components/Menus/Menus';
import MenuItems from '../../components/MenuItems/MenuItems';
import OrderDetails from '../../components/OrderDetails/OrderDetails';

export default function NewOrderPage({ user, menus, menuItems, activeItems, setActiveItems, currentOrder, setCurrentOrder, orderHistory, setOrderHistory, addOrder }) {
  const [enterOrder, setEnterOrder] = useState({
    roomNum: '',
  })
  console.log(enterOrder)
  
  function handleChangeOrder(evt) {
    setEnterOrder({...enterOrder, [evt.target.name]: evt.target.value})
  }

  function handleChangeMenu(name) {
    const currentItems = menuItems.filter(i => i.menu.name === name)
    setActiveItems(currentItems)
  }

  function handleSubmitOrder(evt) {
    evt.preventDefault();
    console.log('submitted', enterOrder)
    addOrder(enterOrder)
  }
  
  function handleAddToOrder(itemId) {
    const orderItem = activeItems.filter(i => i._id === itemId)
    setCurrentOrder([...currentOrder, ...orderItem])
  }
  
  // const order = currentOrder.map(item => (
  //   <OrderDetails item={item} key={item._id} />
  // ))

  const activeMenuItems = activeItems.map(item => (
    <MenuItems item={item} key={item._id} handleAddToOrder={handleAddToOrder} />
  ))

  const allMenus = menus.map(menu => (
    <Menus menu={menu} key={menu._id} handleChangeMenu={handleChangeMenu} />
  ))

  return (
    <>
      <h1>New Order Page</h1>
      <main className='NewOrderPage'>
        <aside>
          <h2>Menus</h2>
          <ul className='menus'>{allMenus}</ul>
        </aside>
        <div>
          <h2>MenuItems</h2>
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
            <button onClick={handleSubmitOrder}>Submit Order</button>
          </form>
        </div>
      </main>
    </>
  );
}