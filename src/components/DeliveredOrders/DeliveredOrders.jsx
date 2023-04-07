export default function DeliveredOrders(order) {
    console.log(order, 'delivered')
    
    return (
        <li>
            {order.roomNum}
        </li>
    )
}