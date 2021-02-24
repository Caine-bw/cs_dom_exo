// 1 

let body = document.querySelector('body')
let count = document.querySelector('#exo-counter')
let span = count.lastElementChild

let i = 1;

count.addEventListener('click', () => {
    span.textContent = i
    i++
})

// 2 


let parentSquare = document.getElementById('parent-square')

let childSquare = parentSquare.firstElementChild
childSquare.textContent = ('off')

childSquare.addEventListener('click', () => {
    parentSquare.setAttribute('style', 'display: flex; justify-content: flex-end')
    childSquare.style.backgroundColor = 'green'
    childSquare.textContent = ('on')
})

// 3 

let title = document.querySelectorAll('h2')

let faux = false;

document.addEventListener('keypress', (e) => {
    if (e.key == 6 && faux == false) {
        title.forEach((elem, index) => {
            elem.textContent = `${index + 1}.${elem.textContent}`
            faux = true

        })
    } else if (e.key == 6 && faux == true) {
        title.forEach((elem) => {
            elem.textContent = elem.textContent.substring(2)
            faux = false
        })
    }
})

// 4

let multiClick = document.getElementById('multi-click')

let t = 1;

multiClick.addEventListener('click', () => {
    if (t == 1) {
        multiClick.style.borderRadius = '50%'

    } else if (t == 2) {
        multiClick.style.backgroundColor = 'red'

    } else if (t == 3) {
        multiClick.style.borderRadius = '0%'
        multiClick.style.backgroundColor = 'white'
        t = 0
    }
    t++
})

// 5 

let couleur = document.getElementById('pick-color')
let p = couleur.nextElementSibling


couleur.addEventListener('change', () => {
    p.style.color = couleur.value
})