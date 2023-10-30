const walls = document.querySelectorAll('.boundary');
const stat = document.querySelector('#status');
const end = document.querySelector('#end');
const start = document.querySelector('#start');
const timer = document.querySelector('#timer');
const bestRecord = document.querySelector('#bestRecord');

let gameStarted = false;
let startTime = 0;
let bestTime = null;

walls.forEach(wall => {
    wall.addEventListener("mouseover", (e) => {
        if (gameStarted) {
            walls.forEach(wall => {
                wall.style.backgroundColor = "red";
                stat.innerHTML = "You Lose !";
                gameStarted = false;
            });
        }
    });
});

end.addEventListener('mouseover', (e) => {
    wallsCurrentColor = walls.item(1).style.backgroundColor;
    if (wallsCurrentColor !== "red" && gameStarted) {
        stat.innerHTML = "You Win !";
        gameStarted = false;
        const endTime = Date.now();
        const elapsedTime = (endTime - startTime) / 1000;
        timer.innerHTML = `Time taken: ${elapsedTime} seconds`;

        if (bestTime === null || elapsedTime < bestTime) {
            bestTime = elapsedTime;
            bestRecord.innerHTML = `Best Record: ${bestTime} seconds`;
        }
    }
});

start.addEventListener('mousedown', (e) => {
    walls.forEach(wall => {
        wall.style.backgroundColor = "#eeeeee";
        gameStarted = true;
        stat.innerHTML = "New Game Started !";
        startTime = Date.now();
    });
});

const outside = document.querySelectorAll('div#maze');
outside.forEach((element) => {
    element.addEventListener("mouseleave", (e) => {
        if (gameStarted) {
            walls.forEach(wall => {
                wall.style.backgroundColor = "red";
                stat.innerHTML = "Don't Cheat !";
                gameStarted = false;
            });
        }
    });
});
