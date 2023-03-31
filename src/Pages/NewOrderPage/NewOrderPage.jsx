import Menus from '../../components/Menus/Menus';
import MenuItems from '../../components/MenuItems/MenuItems';
import OrderDetails from '../../components/OrderDetails/OrderDetails';

export default function NewOrderPage({ user, menus, menuItems, activeItems, setActiveItems, currentOrder, setCurrentOrder, orderHistory, setOrderHistory }) {
  function handleChangeMenu(name) {
    const currentItems = menuItems.filter(i => i.menu.name === name)
    setActiveItems(currentItems)
  }

  function handleSubmitOrder(order) {
    setOrderHistory([...orderHistory, ...order])
    console.log(orderHistory)
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
      <h1>New Order Page</h1>
      <aside>
        <h2>Menus</h2>
        <ul>{allMenus}</ul>
      </aside>
      <main>
        <div>
          <h2>MenuItems</h2>
          <ul>{activeMenuItems}</ul>
        </div>
        <div>
          <h2>Current Order</h2>
          <div>
            <label>Room Number:</label>
            <input type="text" />
          </div>
          <ul>{order}</ul>
          <button onClick={() => handleSubmitOrder(order)}>Submit Order</button>
        </div>
      </main>
    </>
  );
}