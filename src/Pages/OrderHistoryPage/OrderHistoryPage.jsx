import "./OrderHistoryPage.css"
import StagedOrders from '../../components/StagedOrders/StagedOrders'
import DeliveredOrders from '../../components/DeliveredOrders/DeliveredOrders'

export default function OrderHistoryPage({ orderHistory }) {
  function handleDelivery(order) {
    console.log('handle delivery')
  }
  
  const stageTheseOrders = orderHistory.filter(o => o.isStaged === true)
  const deliverTheseOrders = orderHistory.filter(o => o.isDelivered === true)
  
  const stagedOrders = stageTheseOrders.map(order => (
    <StagedOrders order={order} key={order._id} />
  ))

  const deliveredOrders = deliverTheseOrders.map(order => (
    <DeliveredOrders order={order} key={order._id} handleDelivery={handleDelivery} />
  ))

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