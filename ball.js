let canvas = document.querySelector(`canvas`)
let fps = 60
canvas.width = 640
canvas.height = 480
let ballSize = 50
let x = (canvas.width / 2) - (ballSize / 2)
let y = (canvas.height / 2) - (ballSize / 2)
let context = canvas.getContext(`2d`)
let dx = 1
let dy = 0
function drawBall(){

    //console.log(`draw`)
    //x = x + 1

    if (x + ballSize < canvas.width) {
        x += dx 
    }
    else {
        x += -dx
    }
    y += dy //y++
    console.log(x)
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = `white`
    context.fillRect(x, y, ballSize, ballSize)
}
//drawBall()
setInterval(drawBall, 1000 / fps)

/*
speed = distance / time
speed = x or y / fps
*/