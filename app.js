const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

// Ball properties
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    speed: 1, // Reduced ball speed
    dx: 1,
    dy: 1
};

// Circle properties
let circles = [
    { radius: 100, speed: 0.5, gapAngle: Math.PI / 4, angle: 0, isVisible: true }, // Circle 1
    { radius: 150, speed: 0.2, gapAngle: Math.PI / 6, angle: 0, isVisible: true }, // Circle 2
    { radius: 200, speed: 0.1, gapAngle: Math.PI / 8, angle: 0, isVisible: true }  // Circle 3
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
    circles.forEach((circle) => {
        if (circle.isVisible) {
            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2); // Center the circles
            ctx.rotate(circle.angle); // Rotate the circle
            ctx.beginPath();
            ctx.arc(0, 0, circle.radius, 0, Math.PI * 2);
            ctx.lineWidth = 10;
            ctx.strokeStyle = "white";
            ctx.stroke();

            // Draw the gap (empty section)
            ctx.beginPath();
            ctx.arc(0, 0, circle.radius, 0, circle.gapAngle);
            ctx.lineWidth = 10;
            ctx.strokeStyle = "#1a1a1a"; // Same color as background to hide part of the circle
            ctx.stroke();

            ctx.restore();
        }
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
        if (circle.isVisible && isBallInGap(circle)) {
            // Circle disappears
            circle.isVisible = false;
        }
    });

    // Ball collision with edges
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }

    // Rotate the circles
    circles.forEach(circle => {
        circle.angle += circle.speed; // Increase the angle to rotate the circle
    });
}

// Check if ball is passing through the gap of a circle
function isBallInGap(circle) {
    let angle = Math.atan2(ball.y - canvas.height / 2, ball.x - canvas.width / 2);
    if (angle < 0) angle += Math.PI * 2; // Ensure angle is positive
    return angle <= circle.gapAngle;
}

gameLoop(); // Start the game loop
