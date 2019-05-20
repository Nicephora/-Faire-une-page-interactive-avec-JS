
// fonction 1: lorsqu'on clique sur le footer Clique numero 1,2... apparaît dans la console

let clique = document.getElementsByTagName("footer")[0];
let numero = 0
         function clicker() {
             numero += 1
        console.log("Clique numéro " + numero);
    }
    clique.addEventListener("click", clicker);

// Fonction 2 :Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader

let navbarHeader = document.getElementsByClassName("navbar-toggler")[0];
let menu = document.getElementById("navbarHeader");

navbarHeader.addEventListener("click", function(){
  menu.classList.toggle("collapse");
});

// Fonctionnalité 3 :À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !
let firstCard = document.getElementsByClassName("card-body")[0];
// console.log(firstCard);

let editFirstCard = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0];
// console.log(editFirstCard);

editFirstCard.addEventListener("click", function changeColor(){
firstCard.style.color="red"  ;
});


// Fonctionnalité 4 : On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe.
let secondCard = document.getElementsByClassName("card-body")[1];
// console.log(secondCard);

let editSecondCard = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1];
// console.log(editSecondCard);


editSecondCard.addEventListener("click", function (){
if(secondCard.style.color === ""){
           secondCard.style.color = "green";
        } else {
           secondCard.style.color = "";
        }
      });


// Fonctionnalité 5 : Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
let cdn = document.getElementsByTagName("link")[0];
// console.log(cdn)
let navbar = document.getElementsByTagName("header")[0];
// console.log(navbar)

navbar.addEventListener("dblclick", function (){
if(cdn.disabled === true){
           cdn.disabled = false;
        } else {
           cdn.disabled = true ;
        }
      });



// Fonctionalité 6 : La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
let cards = document.getElementsByClassName('col-md-4');
let viewButtons = document.getElementsByClassName('btn-group');

for (let i = 0; i < cards.length; i++) {
  viewButtons[i].firstElementChild.addEventListener('mouseover', function() {
    if (cards[i].getElementsByClassName('card-img-top')[0].style.width === "20%") {
      cards[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
      cards[i].getElementsByClassName('card-text')[0].style.display = "block";
    } else {
      cards[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
      cards[i].getElementsByClassName('card-text')[0].style.display = "none";
    }
  });
}
