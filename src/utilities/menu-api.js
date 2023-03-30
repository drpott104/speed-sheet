import sendRequest from "./send-request"
const BASE_URL = '/api/menus';

export async function getMenus() {
  return sendRequest(BASE_URL);
}

export async function getMenuItems() {
  return sendRequest(`${BASE_URL}/items`);
}