/* 1 - Introduction 
    Javascript est un langage de programmation qui fait partie des languages qu'on appelle orientée objet (POO).
    Tous qu'on utilise en JavaScript est un objet (String, Number, Array) etc.
    La POO permet de mieux organiser notre code, d'éviter les répétitions.
*/

console.log(String)

/* 2 - Classes */
// Pour créer un objet, il faut définir à quoi, il va ressembler. Pour cela, on va utiliser des classes.

class Personne {
  constructor (nom, age) {
    this.nom = nom
    this.age = age
  }

  // Méthode
  presentation () {
    return `Bonjour, mon nom c'est ${this.nom} et j'ai ${this.age} ans.`
  }
}

const divlo = new Personne('Divlo', 17)
console.log(divlo.presentation())

/* 3 - Héritage */
class Developpeur extends Personne {
  constructor (nom, age, langageFavoris) {
    super(nom, age)
    this.langageFavoris = langageFavoris
  }

  presentationLangage () {
    return `Le langage favoris de ${this.nom} est le "${this.langageFavoris}".`
  }
}

const divloDev = new Developpeur('Divlo', 17, 'Javascript')
console.log(divloDev.presentation())
console.log(divloDev.presentationLangage())

/* 4 - Objets/Méthodes utiles (String, Array, Number, Math, Date + setTimeout/setInterval)
    Objets globaux : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux
    La documentation MDN est parfaite pour découvrir les fonctions/méthodes.

    Quelques exemples :
*/

/* L'objet String */
const mot = 'salut'
mot.length // 5 (nombre de caractères)
mot.toLowerCase()
mot.toUpperCase()

/* L'objet Array */
const fruits = ['🍎 Pomme', '🍌 Banane', '🍑 Pêche', '🍉 Pastèque']
fruits.push('🍒 Cerise')
const removeByIndex = (array, index) => array.splice(index, 1)
removeByIndex(fruits, 1)
fruits.forEach(fruit => console.log(fruit))
const newFruitsArray = fruits.map(fruit => fruit + 's')

/* L'objet Number */
const number = 25.178
number.toFixed(2)

/* undefined et null */
undefined
null

/* L'objet Math */
Math.PI // Le chiffre PI
Math.abs(-23) // valeur absolue
Math.round(5.36) // arrondit le nombre
Math.ceil(5.36) // valeur entière supérieure donc pour 5.36 c'est 6
Math.floor(5.89) // valeur entière inférieure donc pour 5.89 c'est 5
Math.max(10, 20, 30) // valeur maxi donc içi 30
Math.random() // nombre aléatoire entre 0 et 1 non compris
Math.floor(Math.random() * 100) + 1 // nombre compris entre 1 et 100

/* L'objet Date */
const today = new Date()
const dateDeTest = new Date('2019/10/23') // 23 octobre 2019
dateDeTest.getDate() // Jour du mois
dateDeTest.getDay() // jour de la semaine par exemple 3 pour mercredi
dateDeTest.getFullYear() // Année
dateDeTest.getMonth() + 1 // Mois (+1 car de 0 à 11 avec le + 1 de 1 à 12)
today.getHours()
today.getMinutes()
today.getSeconds()

/* setTimeout et setInterval */
setTimeout(() => {
  console.log('⌚ Timeout')
}, 5000)

setInterval(() => {
  console.log('⌚ Interval')
}, 5000)
