/* --- CACHED ELEMENTS --- */
const sign = document.querySelector('#sign')
const container = document.querySelector(".container")
const theWall = document.querySelector('#theWall')
const bottleTemplate = document.querySelector('#bottle')

/* --- VARIABLES --- */
const url = 'http://localhost:3000'

/* --- FUNCTIONS --- */
fetchBottles()
async function fetchBottles() {
    const response = await fetch(`${url}/`, {
        mode: 'cors',
        headers: {
          'Access-Control-Allow-Origin':'*'
        }
      })
      jsonObj = await response.json()
      number = jsonObj[0].number
    setSign(number)
    setBottles(number)
}

function setSign(num) {
    sign.textContent = `${num} Bottles Saloon`
}

function setBottles(num) {
    for (let i = 0; i < num; i++) {
        const bottleClone = bottleTemplate.cloneNode(true)
        bottleClone.classList.remove('hide')
        const bottleDiv = document.createElement('div')
        bottleDiv.appendChild(bottleClone)
        bottleDiv.classList.add('bottle')
        theWall.appendChild(bottleDiv)
    }
}