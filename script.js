/* script.js */

// Confetti Effect
const confettiCanvas = document.createElement("canvas");
confettiCanvas.id = "confettiCanvas";
document.body.appendChild(confettiCanvas);
const ctx = confettiCanvas.getContext("2d");

confettiCanvas.width = window.innerWidth;
confettiCanvas.height = window.innerHeight;

const confettiParticles = [];

function createConfetti() {
  for (let i = 0; i < 100; i++) {
    confettiParticles.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      size: Math.random() * 5 + 3,
      speedX: (Math.random() - 0.5) * 3,
      speedY: Math.random() * 3 + 2,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`,
    });
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiParticles.forEach((p) => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.y > confettiCanvas.height) p.y = 0;
  });
  requestAnimationFrame(drawConfetti);
}

function startConfetti() {
  createConfetti();
  drawConfetti();
}

// Floating Hearts Effect
function createFloatingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createFloatingHeart, 500);

function nextPage(page) {
  window.location.href = page;
}

// Ensure floating hearts are created on all pages
function createFloatingHearts() {
  for (let i = 0; i < 20; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }
  setTimeout(createFloatingHearts, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
  createFloatingHearts();

  // Only start confetti on the final page
  if (document.body.classList.contains("final-page")) {
    startConfetti();
  }
});
