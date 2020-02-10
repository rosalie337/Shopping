import cart from '../data/cart.js';
import cameras from '../data/cameras.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from '../shopping-cart/generate-line-items.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('subtotal-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const cameras = findById(cameras, lineItem.id);
    const dom = renderLineItem(lineItem, cameras);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, cameras);
orderTotalCell.textContent = toUSD(orderTotal);
