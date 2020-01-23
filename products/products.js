import createCameraLi from './app.js.js';
import cameras from '../data/cameras';

const ul = document.getElementById('cameras');

for (let i = 0; i < cameras.length; i++) {
    const li = createCameraLi(cameras[i]);
    ul.appendChild(li);
}
