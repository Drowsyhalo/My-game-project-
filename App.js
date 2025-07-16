const root = document.getElementById("root");

// Background Music
const audio = new Audio("/public/background-music.mp3");
audio.loop = true;
audio.volume = 0.4;
audio.play().catch(() => {});

// Create Play Button
const playButton = document.createElement("button");
playButton.textContent = "Play";
playButton.onclick = () => alert("Start Game... (to be added)");

root.appendChild(playButton);
