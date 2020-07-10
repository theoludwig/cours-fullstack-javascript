/* DOM: Document Object Model
    (permet à des scripts d'examiner et de modifier le contenu du navigateur web.)
*/

/* L'objet global du navigateur */
// this
// window

console.log(document)
// console.log(document.__proto__)

/* Sélectionner nos éléments */
document.getElementById('test') // par id
document.getElementsByTagName('p') // par balise
document.getElementsByClassName('paragraphe') // par classe
document.querySelectorAll('p')
const p = document.querySelector('p')

/* Évenements */
const inputTexte = document.getElementById('texte')
const form = document.querySelector('form')
form.addEventListener('submit', event => {
  event.preventDefault()
  console.log(inputTexte.value)
})
inputTexte.addEventListener('input', () => {
  p.innerHTML = inputTexte.value
})

/* Classe CSS */
p.classList.remove('newClass') // supprime une classe
p.classList.toggle('newClass') // changer la classe
p.classList.add('newClass') // ajoute une classe

// Documentation MDN pour plus d'informations.
