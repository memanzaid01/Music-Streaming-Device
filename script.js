// Add event listeners to the buttons
document.getElementById('play').addEventListener('click', playMusic);
document.getElementById('pause').addEventListener('click', pauseMusic);
document.getElementById('next').addEventListener('click', nextMusic);
document.getElementById('prev').addEventListener('click', prevMusic);

// Function to play music
function playMusic() {
    const audio = document.getElementById('audio');
    audio.play();
}

// Function to pause music
function pauseMusic() {
    const audio = document.getElementById('audio');
    audio.pause();
}

// Function to play next music
function nextMusic() {
    // Add code to play next music
}

// Function to play previous music
function prevMusic() {
    // Add code to play
