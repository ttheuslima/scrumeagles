const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const player = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  speed: 3
};

function drawPlayer() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Cabeça
  context.beginPath();
  context.arc(player.x, player.y - 20, 10, 0, Math.PI * 2);
  context.fillStyle = "blue";
  context.fill();

  // Corpo
  context.moveTo(player.x, player.y - 10);
  context.lineTo(player.x, player.y + 20);

  // Braços
  context.moveTo(player.x, player.y - 10);
  context.lineTo(player.x - 20, player.y + 10);
  context.moveTo(player.x, player.y - 10);
  context.lineTo(player.x + 20, player.y + 10);

  // Pés
  context.moveTo(player.x, player.y + 20);
  context.lineTo(player.x - 20, player.y + 40);
  context.moveTo(player.x, player.y + 20);
  context.lineTo(player.x + 20, player.y + 40);

  context.strokeStyle = "blue";
  context.lineWidth = 2;
  context.stroke();
}

function update() {
  if (keys.ArrowUp && player.y > 0) {
    player.y -= player.speed;
  }
  if (keys.ArrowDown && player.y < canvas.height - 50) {
    player.y += player.speed;
  }
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= player.speed;
  }
  if (keys.ArrowRight && player.x < canvas.width - 50) {
    player.x += player.speed;
  }

  drawPlayer();
  requestAnimationFrame(update);
}

const keys = {};

window.addEventListener("keydown", (event) => {
  keys[event.key] = true;
});

window.addEventListener("keyup", (event) => {
  keys[event.key] = false;
});

update();
