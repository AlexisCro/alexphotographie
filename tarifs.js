//script pour le calcul de la prestation mariage

//je déclare mes variables
let one    = document.querySelector('#first');
let two    = document.querySelector('#second');
let three  = document.querySelector('#three');
let four   = document.querySelector('#four');
let five   = document.querySelector('#five');
let six    = document.querySelector('#six');
let seven  = document.querySelector('#seven');
let height = document.querySelector('#height');
let nine   = document.querySelector('#nine');

let btn    = document.querySelector('.bouton-ldc');
let prix;
let res;
let HTML   = document.querySelector('.res');

// Je définis mes fonctions 
// La premiere fct recup la valeur du choix selectionné
function recup(variable){
    prix  = variable.options[variable.selectedIndex].value;
}

// La seconde fct calcul le tarif de la presta selectionné
function price(tarif){
    if(tarif == '1' || 
       tarif == '2' ||
       tarif == '6')
       {
        return res = res + 220; 
        }else if(tarif == '3' ||
                 tarif == '8'){
            return res = res + 350;
        }else if(tarif == '4'){
            return res = res + 200;
        }else if(tarif == '5'){
            return res = res + 270;
        }else if(tarif == '7' ||
                 tarif == '9'){
            return res = res + 250;
        }else if(tarif == '10'){
            return res = res + 1890;
        }else if(tarif == 'none'){
            return res = res + 0;
        }
}

// La troisieme fct vérifie si le résultat est 2350
function check(integer){
    if(res >= 1890){
        return res = 1890;
    }
}


//j'effectue mes fct au moment du click
btn.addEventListener('click', (e)=>{
    res = 0; //Je réinitialise res à chaque click
    if(HTML !== ""){
        HTML.innerHTML = "";
    }        //Si il y a déjà un calcul alors j'actualise le res sinon rien
    recup(one);
    price(prix);
    check(res);
    recup(two);
    price(prix); 
    check(res); 
    recup(three);
    price(prix);
    check(res); 
    recup(four);
    price(prix);
    check(res); 
    recup(five);
    price(prix);
    check(res); 
    recup(six);
    price(prix);
    check(res); 
    recup(seven);
    price(prix);
    check(res); 
    recup(height);
    price(prix);
    check(res); 
    recup(nine);
    price(prix);
    check(res); 
    console.log(res);
    if(res == 0){
        alert("Veuillez sélectionner au minimum une prestation pour effectuer un calcul");
    } 
    HTML.insertAdjacentHTML('afterbegin', res + '€');
    HTML.classList.add('visible');
})
