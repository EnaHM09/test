let canvas = document.querySelector(`canvas`)
let fps = 25
canvas.width = 640
canvas.height = 480
let ballSize = 50
let x = (canvas.width / 2) - (ballSize / 2)
let y = (canvas.height / 2) - (ballSize / 2)
let context = canvas.getContext(`2d`)
function drawBall(){
    console.log(`draw`)
    context.fillStyle = `white`
    context.fillRect(x, y, ballSize, ballSize)
}
//drawBall()
setInterval(drawBall, 1000 / fps)
