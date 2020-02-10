import { toUSD } from '../common/utils.js';

function renderLineItem(lineItem, camera) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = camera.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(camera.price);
    tr.appendChild(priceCell);
    
    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * camera.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return true;
}

export default renderLineItem;