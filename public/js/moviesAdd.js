window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    // Title (h1) color change when mouse over
    titulo.addEventListener('mouseover', () => {
        titulo.style.color = 'orange'
    });

    // If word "secreto" is typed, then show an alert
    let titleInput = document.querySelector('#titulo');
    let estadoSecreto = 0;
    titleInput.addEventListener('keypress', (e) => {
        if (e.key == 's') {
            estadoSecreto = 1;
        } else if (estadoSecreto == 1 && e.key == 'e') {
            estadoSecreto += 2;
        } else if (estadoSecreto == 3 && e.key == 'c') {
            estadoSecreto += 3;
        } else if (estadoSecreto == 6 && e.key == 'r') {
            estadoSecreto += 4;
        } else if (estadoSecreto == 10 && e.key == 'e') {
            estadoSecreto += 5;
        } else if (estadoSecreto == 15 && e.key == 't') {
            estadoSecreto += 6;
        } else if (estadoSecreto == 21 && e.key == 'o') {
            estadoSecreto = 0;
            alert('SECRETO MAGICO');
        } else {
            estadoSecreto = 0;
        }
        console.log(estadoSecreto);
    });
}