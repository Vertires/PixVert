// script.js
const squares = document.querySelectorAll('.square');
const startButton = document.getElementById('start-btn');
let isRaceRunning = false;

const gameWidth = 600;
const obstacles = []; // To store obstacles, can add later for randomized obstacles

// Randomized path (simple, but you can improve this)
function randomizePath() {
    const randomObstacles = [];
    for (let i = 0; i < 5; i++) {
        randomObstacles.push({
            x: Math.random() * gameWidth,
            width: Math.random() * 50 + 30,
            y: Math.random() * 150,
            height: Math.random() * 40 + 20
        });
    }
    return randomObstacles;
}

// Collision detection (simple rectangle collision)
function checkCollision(square, obstacle) {
    return square.x + 40 > obstacle.x && square.x < obstacle.x + obstacle.width &&
           square.y + 40 > obstacle.y && square.y < obstacle.y + obstacle.height;
}

// Start race function
function startRace() {
    if (isRaceRunning) return;
    isRaceRunning = true;
    startButton.disabled = true;

    const randomObstacles = randomizePath();
    obstacles.length = 0;
    obstacles.push(...randomObstacles);

    squares.forEach((square, index) => {
        square.x = 0; // Reset starting positions
        let velocity = Math.random() * 2 + 2;
        let squareInterval = setInterval(() => {
            square.x += velocity;

            // Check if square reaches the finish line
            if (square.x >= gameWidth - 40) {
                alert(`${square.className.split(' ')[1]} wins!`);
                clearInterval(squareInterval);
                isRaceRunning = false;
                startButton.disabled = false;
            }

            // Check for collision with obstacles
            obstacles.forEach(obstacle => {
                if (checkCollision(square, obstacle)) {
                    // Bounce off the obstacle (simple response)
                    velocity = -velocity; // Reverse direction when collision happens
                    square.style.left = `${square.x}px`; // Update position
                }
            });

            square.style.left = `${square.x}px`; // Update position
        }, 100);
    });
}

// Add event listener to start the race
startButton.addEventListener('click', startRace);
