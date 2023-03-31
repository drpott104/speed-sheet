export default function MenuItems({ item, handleAddToOrder }) {
    return (
        <li onClick={() => handleAddToOrder(item._id)}>
            {item.name} <br/>
            {item.description}
        </li>
    )
}