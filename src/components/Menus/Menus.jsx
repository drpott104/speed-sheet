export default function Menus({ menu, handleChangeMenu }) {
    
    return (
        <li onClick={() => handleChangeMenu(menu.name)}>{menu.name}</li>
    )
}