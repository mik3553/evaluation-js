
document.addEventListener('DOMContentLoaded', (event) => {

    // Chargement des images
    const images = [
        { image: '1.jpg'},
        { image: '2.jpg'},
        { image: '3.jpg'},
        { image: '4.jpg'},
        { image: '5.jpg'}
    ]

    // Initialisation d'un etat à 0
    let state = 0;

    // récupérer depuis le dom le container
    const sliders = document.querySelector('.container');

    // initialiser le container avec la premiere image du tableau
    sliders.setAttribute('style', `background-image:url(./images/${images[state].image}`)

    // récupérer depuis le dom les deux "bouton" pour naviguer sur le slider
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    // fonction pour incrementer les images et retour a 0 si longueur du tableau === state
    right.addEventListener('click', () => {
        state++;
        if(state === images.length){
            state=0;
        }
        sliders.setAttribute('style', `background-image:url(./images/${images[state].image})`);
    })

    // fonction pour décrementer les images et retour a 0 si longueur du tableau === state
    left.addEventListener('click', () => {
        state--;
        if(state < 0 ){
            state = images.length - 1;
        }
        sliders.setAttribute('style', `background-image:url(./images/${images[state].image})`)
    })
});



