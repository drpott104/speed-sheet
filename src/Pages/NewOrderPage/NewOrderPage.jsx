import { useState, useEffect, useRef } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Menus from '../../components/Menus/Menus';

export default function NewOrderPage({ user, menu }) {
  const [menu, setMenu] = useState([])
  
  return (
    <>
      <h1>New Order Page</h1>
      <NavBar user={user} />
      <aside>
        <Menus menu={menu} />
      </aside>
    </>
  );
}