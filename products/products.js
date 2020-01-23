import createProduct from './create-products.js';
import cameras from '../data/cameras.js';

const ul = document.getElementById('cameras');
for (let i = 0; i < cameras.length; i++) { 
    const li = createProduct(cameras[i]);
    ul.appendChild(li);
}