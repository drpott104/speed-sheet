import "./OrderHistoryPage.css"
import StagedOrders from '../../components/StagedOrders/StagedOrders'
import DeliveredOrders from '../../components/DeliveredOrders/DeliveredOrders'

export default function OrderHistoryPage({ user, orderHistory, setOrderHistory }) {
  console.log(orderHistory)
  const userOrders = orderHistory.filter(o => o.user === user._id)
  const stageTheseOrders = userOrders.filter(o => o.isStaged === true)
  const deliverTheseOrders = userOrders.filter(o => o.isDelivered === true)

  
  const stagedOrders = stageTheseOrders.map(order => (
    <StagedOrders order={order} key={order._id} orderHistory={orderHistory} setOrderHistory={setOrderHistory} />
  ))

  const deliveredOrders = deliverTheseOrders.map(order => (
    <DeliveredOrders order={order} key={order._id} />
  ))

  console.log(deliveredOrders, 'delivered orders')

  return (
    <>
      <h1>Order History</h1>
      <div className='order-history'>
        <div>
          <h2>Staged Orders</h2>
          <ul className='staged-orders'>{stagedOrders}</ul>
        </div>
        <div>
          <h2>Delivered Orders</h2>
          <ul className='delivered-orders'>{deliveredOrders}</ul>
        </div>
      </div>
    </>
  );
}