export default function StagedOrders({ order, orderHistory, setOrderHistory }) {
    function handleDelete() {
        const newList = orderHistory.filter(o => o._id !== order._id);
        // setOrderHistory(...newList);
        console.log(orderHistory, 'modified list')
    }
    
    return (
        <li>
            {order.roomNum}
            <button onClick={handleDelete}>X</button>
        </li>
    )
}