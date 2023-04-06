import OrderHistory from '../../components/OrderHistory/OrderHistory'

export default function OrderHistoryPage({ orderHistory, currentOrder }) {
  function handleDelivery(evt) {
    evt.preventDefault()
  }
  
  const pastOrders = orderHistory.map(order => (
    <OrderHistory order={order} key={order._id} handleDelivery={handleDelivery} />
  ))

  return (
    <>
      <h1>Order History</h1>
      <ul>{pastOrders}</ul>
    </>
  );
}