console.log(`result`)
function add2Numbers(x, y) {
    return x + y
}
function click(){
    let input = document.querySelector(`input`)
    console.log(input.value)
    
}
let button = document.querySelector(`button`)
console.log(button)
button.addEventListener(`click`, click)