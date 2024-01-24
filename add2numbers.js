console.log(`result`)
function add2Numbers(x, y) {
    return Number(x) + +y

}
function click(){
    let input = document.querySelectorAll(`input`)
    let el=document.querySelector(`#x`)
    console.log(el.value)
    console.log(input)
    let x = input[0].value
    let y = input[1].value
    let answer = add2Numbers(x, y)
    alert(answer)
}
let button = document.querySelector(`button`)
console.log(button)
button.addEventListener(`click`, click)