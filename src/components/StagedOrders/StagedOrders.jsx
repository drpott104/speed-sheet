import './StagedOrders.css'
import * as ordersAPI from "../../utilities/order-api"

export default function StagedOrders({ order, orderHistory, setOrderHistory }) {
    async function handleDelete(evt) {
        evt.preventDefault()
        const newArray = await ordersAPI.deleteOrder(order._id)
        setOrderHistory(newArray)
    }
    
    async function handleDelivery(evt) {
        evt.preventDefault()
        const modOrder = await ordersAPI.deliverOrder(order._id)
        console.log(orderHistory)
    }
    
    return (
        <form>
            <li>
                {order.roomNum}
                <button className='button' onClick={handleDelete}>Delete</button>
                <button className='button' onClick={handleDelivery}>Deliver</button>
            </li>
        </form>
    )
}