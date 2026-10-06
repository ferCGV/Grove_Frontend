// Seleccionamos todos los sliders (contienen container + buttons)
const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
    const container = slider.querySelector('.container');
    const [btnLeft, btnRight] = slider.querySelectorAll('.arrows');
    
    // Estado independiente para cada slider
    let counter = 0;
    let coordenadas = 0;

    function moveToLeft() {
        console.log(counter, coordenadas, container);
        if(counter == 0){
            counter = 2;
            coordenadas = -(100/3 * 2);
        } else {
            coordenadas += 100/3;
            counter--;
        }
        container.style.transform = `translateX(${coordenadas}%)`;
        container.style.transition = 'transform 0.4s ease';
    }

    function moveToRight() {
        console.log(counter, coordenadas, container);
        if(counter == 2){
            counter = 0;
            coordenadas = 0;
        } else {
            coordenadas += -(100/3);
            counter++;
        }
        container.style.transform = `translateX(${coordenadas}%)`;
        container.style.transition = 'transform 0.6s ease';
    }

    // Asignamos eventos
    btnLeft.addEventListener('click', moveToLeft);
    btnRight.addEventListener('click', moveToRight);
});