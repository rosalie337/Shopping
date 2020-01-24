function createdProduct(camera) {
    const li = document.createElement('li');
    li.className = camera.category;
    li.title = camera.description;

    const h2 = document.createElement('h2');
    h2.textContent = camera.name;
    li.appendChild(h2);

    const img = document.createElement('img');
    img.src = '../assets/' + camera.image;
    img.alt = camera.name + 'image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + camera.price.toFixed(2);
    p.textContent = usd;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = camera.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default createdProduct;