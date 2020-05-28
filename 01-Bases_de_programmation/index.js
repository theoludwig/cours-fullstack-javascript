/* 1 - Console, variables et commentaires */

// Afficher quelque chose
console.log("Hello world!");

// Variable vide - (Convention de nommage camelCase : d'abord en minuscule puis mot composé début du mot en majuscule)
var maVariable; 

// 2 façons d'écrire des commentaires
/* Voici un commentaire en JavaScript */
// En voici un autre


/* 2 - Les principaux types de données */

var string = "Salut"; // String
var number = 42; // Number
var boolean = false; // Boolean
var array = ["String", 200.47, true]; // Array
var object = { // Object
    cle: "valeur",
    deuxiemeCle: false
};

// Pour connaître le type d'une variable
console.log(typeof string);

// Convertir d'un type à l'autre 
number.toString();
Number(number);


/* 3 - Conditions */
if (boolean) {

} else if (boolean) {

} else {

}

switch (string) {
    case "Salut":
        console.log("Bonjour");
        break;
    case "Aurevoir":
        console.log("Aurevoir");
        break;
    default:
        console.log("Aucune salutation choisi.");
}

/* 4 - Boucles */
while (boolean) {

}

do {

} while (boolean);

for (let index = 0; index < 10; index++) {

}


/* 5 - Fonctions */
function additionne(nombre1, nombre2) {
    return nombre1 + nombre2;
}
additionne(5, 7);

/* 6 - Utiliser les Array et Object + Opérateurs */
array[0]; // accède à la 1ère valeur
object.cle;
object["deuxiemeCle"];

// Maths
var x = 20;
var y = 6;
x + y;  // Addition
x++;    // Raccourci d'écriture pour écrire x + 1
x - y;  // Soustraction
x * y;  // Multiplication
x / y;  // Divison
x % y;  // Reste de la division (% = modulo)
x ** y; // x à la puissance Y → 20*20*20*20*20*20 

// Boolean algebra (Soit True sinon False)
x == y;    // X est-il égale à Y ?
x != y;    // X est-il différent à Y ?
x < y;    // X est-il inférieur à Y ?
x > y;   // X est-il supérieur à Y ?

// Combiner des conditions
x && y;  // Si a ET b sont égales
x || y;  // Si a OU b sont égales
x !== y; // Si a est DIFFÉRENT à b

/* 7 - let, const, arrow functions et ternaire */
let variable;
const constante = "Divlo";
const fonction = (string) => {
    return string;
}
(true) ? true : false;