// Firebase Initialization (already in index.html)
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const database = getDatabase();

// Function to save pixel color
function savePixel(x, y, color) {
  const pixelRef = ref(database, 'pixels/' + x + '/' + y); // Save pixel data at 'pixels/x/y'
  set(pixelRef, {
    color: color
  });
}

// Function to load pixel data
function loadPixels() {
  const pixelsRef = ref(database, 'pixels');
  get(pixelsRef).then((snapshot) => {
    if (snapshot.exists()) {
      const pixels = snapshot.val();
      for (let x in pixels) {
        for (let y in pixels[x]) {
          const color = pixels[x][y].color;
          // Set the pixel color on the page
          document.getElementById(`${x}-${y}`).style.backgroundColor = color;
        }
      }
    }
  });
}

// Function to save chat message
function saveChatMessage(username, message) {
  const messagesRef = ref(database, 'chat/messages');
  const newMessageRef = messagesRef.push();
  set(newMessageRef, {
    username: username,
    message: message,
    timestamp: Date.now()
  });
}

// Function to load chat messages
function loadChatMessages() {
  const messagesRef = ref(database, 'chat/messages');
  get(messagesRef).then((snapshot) => {
    if (snapshot.exists()) {
      const messages = snapshot.val();
      const chatBox = document.getElementById('chatBox');
      chatBox.innerHTML = ''; // Clear existing chat
      const recentMessages = Object.values(messages).slice(-10); // Get 10 most recent messages
      recentMessages.forEach(msg => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${msg.username}: ${msg.message}`;
        chatBox.appendChild(messageElement);
      });
    }
  });
}

// Function to handle color change and pixel placement
document.getElementById('pixelGrid').addEventListener('click', (e) => {
  if (e.target.classList.contains('pixel')) {
    const pixel = e.target;
    const color = document.getElementById('colorPicker').value;
    pixel.style.backgroundColor = color;
    const x = pixel.dataset.x;
    const y = pixel.dataset.y;
    savePixel(x, y, color); // Save pixel color to Firebase
  }
});

// Function to handle chat submission
document.getElementById('sendMessage').addEventListener('click', () => {
  const username = 'Guest'; // You can set up a simple prompt for username
  const message = document.getElementById('chatInput').value;
  if (message) {
    saveChatMessage(username, message); // Save chat message to Firebase
    document.getElementById('chatInput').value = ''; // Clear input field
  }
});

// Load data on page load
window.onload = function() {
  loadPixels(); // Load saved pixels
  loadChatMessages(); // Load saved chat messages
};
