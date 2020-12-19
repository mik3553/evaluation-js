
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

    // initialiser le container avec la premiere image du tableau
    sliders.setAttribute('style', `background-image:url(./images/${images[state].image}`)

    //generer les 4 boutons de navigation
    for (let i = 0 ; i < images.length ; i++){
        const li = document.createElement('li');
        li.classList = 'inactive';
        nav.appendChild(li);
    }

    const li = document.querySelectorAll('.inactive');  // selection des li avec la class inactive
    function addClass(state){     // ajouter une class au noeud du dom courant (image == state)
        for (const [i,el] of li.entries()) {
            if(i === state){
                el.classList.add('active');
            }
        }
    }

    function removeClass(){    // suppression une class au noeud du dom courant (image == state)
        for (const el of li) {
            el.classList.remove('active');
        }
    }

    // fonction pour incrementer les images et retour a 0 si longueur du tableau === state
    right.addEventListener('click', () => {
        state++;
        if(state === images.length){
            state=0;
        }
        sliders.setAttribute('style', `background-image:url(./images/${images[state].image})`);
        removeClass();
        addClass(state);
    }, false)

    // fonction pour décrementer les images et retour à la derniere image si longueur du tableau < 0
    left.addEventListener('click', () => {
        state--;
        if(state < 0 ){
            state = images.length - 1;
        }
        sliders.setAttribute('style', `background-image:url(./images/${images[state].image})`);
        removeClass();
        addClass(state);
    },false)

    const childs = nav.childNodes;
    for( let i = 0; i < childs.length; i++) {
        childs[i].addEventListener('click', (e) => {
            removeClass();
            state= i;
            addClass(state);
            sliders.setAttribute('style', `background-image:url(./images/${images[state].image})`);

        },false)
    }
});



