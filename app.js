const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

// Ball properties
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 2,
    dx: 2,
    dy: 2
};

// Circle properties
let circles = [
    { radius: 100, speed: 1, gapSize: Math.PI / 4 }, // Gap size in radians
    { radius: 150, speed: 0.5, gapSize: Math.PI / 6 },
    { radius: 200, speed: 0.3, gapSize: Math.PI / 8 }
];

// Game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawCircles();
    drawBall();
    moveBall();
    requestAnimationFrame(gameLoop); // Call next frame
}

// Draw rotating circles
function drawCircles() {
    circles.forEach((circle, index) => {
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2); // Center the circles
        ctx.rotate(circle.speed * index); // Rotate circles differently
        ctx.beginPath();
        ctx.arc(0, 0, circle.radius, 0, Math.PI * 2);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "white";
        ctx.stroke();
        
        // Draw the gap
        ctx.beginPath();
        ctx.arc(0, 0, circle.radius, 0, circle.gapSize);
        ctx.lineWidth = 10;
        ctx.strokeStyle = "black";
        ctx.stroke();
        
        ctx.restore();
    });
}

// Draw ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}

// Move ball
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Check if ball passes through any gaps
    circles.forEach(circle => {
        if (isBallInGap(circle)) {
            // Circle disappears (for simplicity, we just reduce the radius)
            circle.radius -= 2;
        }
    });

    // Ball collision with edges
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }
}

// Check if ball is passing through the gap of a circle
function isBallInGap(circle) {
    let angle = Math.atan2(ball.y - canvas.height / 2, ball.x - canvas.width / 2);
    return angle >= 0 && angle <= circle.gapSize;
}

gameLoop(); // Start the game loop
