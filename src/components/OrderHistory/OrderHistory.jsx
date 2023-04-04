export default function orderHistory(order) {
    console.log(order, "order")

    return (
        <li>
            {order.roomNum}
        </li>
    )
}