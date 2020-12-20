
document.addEventListener('DOMContentLoaded', (event) => {

    // Chargement des images
    const images = [
        { image: '1.jpg'},
        { image: '2.jpg'},
        { image: '3.jpg'},
        { image: '4.jpg'},
        { image: '5.jpg'}
    ]

    let state = 0; //initialiser un etat a 0

    const left = document.querySelector('.left');           // selection du bouton left
    const right = document.querySelector('.right');         // selection du bouton right
    const nav = document.createElement('ul');              //creation balise ul
    const body = document.querySelector('body');           // selection du body
    const sliders = document.querySelector('.container');  // selection du conteneur
    body.appendChild(nav);                                         // ajôut de la nav sur le body

    for (let i = 0 ; i < images.length ; i++){     //generer les 4 boutons de navigation
        const li = document.createElement('li');
        li.classList.add('inactive');
        nav.appendChild(li);
    }
    const navigation = document.querySelectorAll('.inactive');  // selection des li avec la class inactive

    const synchronization = (state) => {   // fonction pour initialiser le conteneur avec la premiere image du tableau
        sliders.setAttribute('style', `background-image:url(./images/${images[state].image}`);
        changeClassName();
    }

    for( let i = 0; i < navigation.length; i++) {
        navigation[i].addEventListener('click', () => {
            state = i;
            synchronization(state);
        },false)
    }

    const changeClassName = ()=> {    // suppression de la class inactive et ajout de la class active sur la navigation courante (li.position == state)
        for (const el of navigation) {
            el.classList.remove('active');
        }
        navigation[state].classList.add('active');
    }

    // fonction pour incrementer les images et retour a 0 si longueur du tableau === state
    right.addEventListener('click', () => {
        state++;
        state === images.length ? state = 0 : null;
        synchronization(state);
    }, false)

    // fonction pour décrementer les images et retour à la derniere image si longueur du tableau < 0
    left.addEventListener('click', () => {
        state--;
        state < 0 ? state = images.length - 1 : null;
        synchronization(state);
    },false)

    synchronization(state);

});



