export default function DeliveredOrders(order) {
    console.log(order, 'delivered orders')
    return (
        <li>
            {order.order.roomNum}
        </li>
    )
}