const createCameraLi = (someCamera) => {
    const cameraLi = document.createElement('li');
    cameraLi.classList.add('Nikon');
    cameraLi.title = someCamera.description;

    const cameraH3 = document.createElement('h3');
    cameraH3.textContent = someCamera.name;

    const cameraImg = document.createElement('img');
    cameraImg.src = `../assets/${someCamera.image}`;
    cameraImg.alt = `${someCamera.name} image`;

    const cameraP = document.createElement('p');
    cameraP.classList.add('price');
    cameraP.textContent = '$' + someCamera.price.toFixed(2);
    

    const button = document.createElement('button');
    button.value = 'Add';
    
    cameraLi.appendChild(cameraH3);
    cameraLi.appendChild(cameraImg);
    cameraLi.appendChild(cameraP);
    cameraP.appendChild(button);

    return cameraLi;
};

export default createCameraLi;