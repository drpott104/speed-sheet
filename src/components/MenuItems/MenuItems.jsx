import './MenuItems.css'

export default function MenuItems({ item, handleAddToOrder }) {
    return (
        <li className='menu-item' onClick={() => handleAddToOrder(item._id)}>
            {item.name} <br/>
            {item.description}
        </li>
    )
}