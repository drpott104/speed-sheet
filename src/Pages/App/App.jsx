import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import * as menuAPI from "../../utilities/menu-api";
import * as orderAPI from "../../utilities/order-api";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [menus, setMenus] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeItems, setActiveItems] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  async function addOrder(orderData) {
    const newOrder = await orderAPI.addOrder(orderData);
    console.log(newOrder, "new order response")
  }

  useEffect(() => {
      async function getMenus() {
        const menuResults = await menuAPI.getMenus()
        const menuItemResults = await menuAPI.getMenuItems()
        const initialItems = menuItemResults.filter(i => i.menu.name === 'Breakfast')
        setMenus(menuResults)
        setMenuItems(menuItemResults)
        setActiveItems(initialItems)
      }
      getMenus()
  }, [])

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/*" element={<NewOrderPage
                user={user}
                setUser={setUser}
                menus={menus}
                menuItems={menuItems}
                activeItems={activeItems}
                setActiveItems={setActiveItems}
                currentOrder={currentOrder}
                setCurrentOrder={setCurrentOrder}
                orderHistory={orderHistory}
                setOrderHistory={setOrderHistory}
                addOrder={addOrder}
              />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
