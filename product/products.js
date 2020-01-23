import cameras from './data/cameras.js';
import createProduct from './create-products';

const list = document.getElementById('cameras');

for(let i = 0; i < cameras.length; i++) {
    const camera = cameras[i];
    const dom = createProduct(camera);
    list.appendChild(dom);
}