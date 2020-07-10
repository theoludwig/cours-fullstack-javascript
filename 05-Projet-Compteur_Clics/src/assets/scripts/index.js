import Counter from './Counter'
const numberFact = document.getElementById('number-fact')

const counter = new Counter(document.getElementById('counter-number'), 0, 1)
counter.add(document.getElementById('add-button'))
counter.subtract(document.getElementById('subtract-button'))
counter.reset(document.getElementById('reset-button'))
counter.changeStep(document.getElementById('step-input'))
counter.addListener(async count => {
  numberFact.innerText = 'Chargement...'
  const data = await window.fetch(`http://numbersapi.com/${count}`)
  const textContent = await data.text()
  numberFact.innerText = textContent
})
