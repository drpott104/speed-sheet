export default function DeliveredOrders(order) {
    function handleDelivery() {
        order.order.isStaged = false;
        order.order.isDelivered = true
    }

    return (
        <li>
            {order.order.roomNum}
            <button onClick={handleDelivery}>O</button>
        </li>
    )
}