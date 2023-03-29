export default function Menus({ menu, activeMenu, setActiveMenu }) {
    const menuList = menu.map((menu) => 
        <li
            key={menu}
            className={menu === activeMenu ? 'active' : ''}
            onClick={() => setActiveMenu(menu)}
        >
            {menu}
        </li>
    )
    
    return(
        <>
            <ul>{menuList}</ul>
        </>
    )
}