import Menus from '../../components/Menus/Menus';
import MenuItems from '../../components/MenuItems/MenuItems';

export default function NewOrderPage({ user, menus, menuItems, activeItems, setActiveItems }) {
  function handleChangeMenu(name) {
    const currentItems = menuItems.filter(i => i.menu.name === name)
    setActiveItems(currentItems)
  }

  const activeMenuItems = activeItems.map(item => (
    <MenuItems item={item} key={item._id} />
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
      <aside>
        <h2>MenuItems</h2>
        <ul>{activeMenuItems}</ul>
      </aside>
    </>
  );
}