import './Menus.css'

export default function Menus({ menu, handleChangeMenu }) {
    
    return (
        <li className='menu' onClick={() => handleChangeMenu(menu.name)}>{menu.name}</li>
    )
}