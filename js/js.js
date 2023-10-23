// part1 start
let btn = document.querySelector('button')
let heading = document.querySelector('h1')

btn.addEventListener('click', () => {
    heading.innerHTML = 'I love Chittagong'
})

let back = document.querySelector('.back')


back.addEventListener('click', () => {
    heading.innerHTML = 'I love Bangladesh' 
})

// part2 start



// on option
let on = document.querySelector('.btnOn')
let img = document.querySelector('img')

on.addEventListener('click', () => {
    img.src = './image/on.png'
})


// off option
let off = document.querySelector('.btnOff')
off.addEventListener('click', () => {
    img.src = './image/off.png'
})