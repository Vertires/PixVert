// Set the target date (UTC)
const targetDate = new Date(Date.UTC(2024, 11, 31, 23, 59, 59));

// Select elements
const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");

// Update the countdown every second
function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
        countdownElement.style.display = "none";
        messageElement.style.display = "block";
        return;
    }

    // Calculate time left
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update the countdown display
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Start updating the countdown
setInterval(updateCountdown, 1000);
