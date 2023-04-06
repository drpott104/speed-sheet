export default function StagedOrders({ order, handleDelivery }) {
    return (
        <li>
            {order.roomNum}
            <button onClick={handleDelivery}>O</button>
        </li>
    )
}