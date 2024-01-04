console.log(`Hi`)
function click(){
    //console.log(`Thanks`)
    //alert(`Thank you!`)
    let input = document.querySelector(`input`)
    console.log(input.value)
    alert(`Hello ${input.value}`)
}
let button = document.querySelector(`button`)
console.log(button)
button.addEventListener(`click`, click)
