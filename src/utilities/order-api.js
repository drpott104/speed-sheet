import sendRequest from "./send-request"
const BASE_URL = '/api/orders';

export async function addOrder(orderData) {
  console.log("api orders", orderData)
  return sendRequest(BASE_URL, 'POST', orderData);
}
