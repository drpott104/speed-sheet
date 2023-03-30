import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import * as menuAPI from "../../utilities/menu-api"

export default function App() {
  const [user, setUser] = useState(getUser());
  const [menus, setMenus] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [activeItems, setActiveItems] = useState([]);

  useEffect(() => {
      async function getMenus() {
        const menuResults = await menuAPI.getMenus()
        const menuItemResults = await menuAPI.getMenuItems()
        const initialItems = menuItemResults.filter(i => i.menu.name === 'Breakfast')
        setMenus(menuResults)
        setMenuItems(menuItemResults)
        setActiveItems(initialItems)

        console.log(menuItemResults)
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
              <Route path="/orders/new" element={<NewOrderPage
                user={user}
                setUser={setUser}
                menus={menus}
                menuItems={menuItems}
                activeItems={activeItems}
                setActiveItems={setActiveItems}
                />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
              <Route path="/*" element={<NewOrderPage
                user={user}
                setUser={setUser}
                menus={menus}
                menuItems={menuItems}
                activeItems={activeItems}
                setActiveItems={setActiveItems}
              />} />
            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
