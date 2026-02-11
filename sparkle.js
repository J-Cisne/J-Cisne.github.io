// Play sparkle sound on click
const sparkleAudio = new Audio('sparkle.mp3');

document.addEventListener('click', () => {
  sparkleAudio.currentTime = 0;
  sparkleAudio.play();
});
