export default function OrderDetails({ item, enterOrder, setEnterOrder }) {
    function handleDelete() {
        
    }

    return (
        <li>
            {item.name}
            <button onClick={handleDelete}>X</button>
        </li>
    )
}