const canvas = document.querySelector('#my-badass-canvas')
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let x = 40, y = 40, dx = 2, dy = -2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.rect(x, y, 100, 50);
    ctx.fillStyle = "coral";
    ctx.fill();
    ctx.closePath()
}


document.addEventListener("keydown", e => {
    switch (e.key) {
        case "ArrowUp":
            y -= 50
            break;
        case "ArrowDown":
            y += 50
            break;
        case "ArrowLeft":
            x -= 50
            break;
        case "ArrowRight":
            x += 50
            break;
        default:
            break;
    }
})

window.addEventListener('resize', (e) => {
    canvas.width = e.target.innerWidth
    canvas.height = e.target.innerHeight
})

setInterval(draw, 100)