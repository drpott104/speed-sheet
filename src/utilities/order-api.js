import sendRequest from "./send-request"
const BASE_URL = '/api/orders';


export async function addOrder(orderData) {
  return sendRequest(BASE_URL, 'POST', orderData);
}

export async function getPastOrders() {
  return sendRequest (BASE_URL);
}

export async function getCurrentCart() {
  return sendRequest (`${BASE_URL}/currentCart`);
}

export async function deleteOrder(orderId) {
  return sendRequest(`${BASE_URL}/${orderId}`, "DELETE")
}

export async function deliverOrder(orderId) {
  return sendRequest(`${BASE_URL}/${orderId}`, 'POST')
}