const walls = document.querySelectorAll('.boundary');
const stat = document.querySelector('#status')
const end = document.querySelector('#end')
const start = document.querySelector('#start')
let gameStarted = false

walls.forEach(wall => {
    wall.addEventListener("mouseover", (e) => {
        if (gameStarted) {
            walls.forEach(wall => {
                wall.style.backgroundColor = "red";
                stat.innerHTML = "You Lose !"
                gameStarted = false
            })
        }
    })
});

end.addEventListener('mouseover', (e) => {

    wallsCurrentColor = walls.item(1).style.backgroundColor
    if (wallsCurrentColor !== "red" && gameStarted) {
        stat.innerHTML = "You Win !"
        gameStarted = false
    }
})

start.addEventListener('mousedown', (e) => {
    walls.forEach(wall => {
        wall.style.backgroundColor = "#eeeeee"
        gameStarted = true
        stat.innerHTML = "New Game Started !"
    })

})


// const body = document.querySelector('body')

// body.addEventListener("mouseover", (e) => {
//     if (gameStarted) {
//         walls.forEach(wall => {
//             wall.style.backgroundColor = "red";
//             stat.innerHTML = "You Lose !"
//             gameStarted = false
//         })
//     }
// })
