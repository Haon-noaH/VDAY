const div_parent = document.querySelector(".gridcont");
const S = document.getElementById("S");
const SE = document.getElementById("SE");
const SW = document.getElementById("SW");
const E = document.getElementById("E");
const W = document.getElementById("W");
const NE = document.getElementById("NE");
const N = document.getElementById("N");
const NW = document.getElementById("NW");
let animationId = null;
let currentY = 0;
let currentX = 0;

const DIV_SIZE = 150;

function isWithinBounds(newX, newY) {
  const rect = div_parent.getBoundingClientRect();
  const originalX = rect.left - currentX;
  const originalY = rect.top - currentY;

  const finalX = originalX + newX;
  const finalY = originalY + newY;

  return (
    finalX >= 0 &&
    finalX + DIV_SIZE <= window.innerWidth &&
    finalY >= 0 &&
    finalY + DIV_SIZE <= window.innerHeight
  );
}

function moveS() {
  currentY += 2;
  div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  animationId = requestAnimationFrame(moveS);
}

function moveSE() {
  currentY += 2;
  currentX += 2;
  div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  animationId = requestAnimationFrame(moveSE);
}

function moveSW() {
  currentY += 2;
  currentX -= 2;
  div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  animationId = requestAnimationFrame(moveSW);
}

function moveE() {
  currentX += 2;
  div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  animationId = requestAnimationFrame(moveE);
}
function moveW() {
  currentX -= 2;
  div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  animationId = requestAnimationFrame(moveW);
}

function moveNE() {
  currentY -= 2;
  currentX += 2;
  div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  animationId = requestAnimationFrame(moveNE);
}

function moveN() {
  currentY -= 2;
  div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  animationId = requestAnimationFrame(moveN);
}

function moveNW() {
  currentY -= 2; // Move up (negative Y)
  currentX -= 2; // Move left (negative X)
  div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  animationId = requestAnimationFrame(moveNW);
}

S.addEventListener("mouseenter", () => {
  moveS();
});

SE.addEventListener("mouseenter", () => {
  moveSE();
});

SW.addEventListener("mouseenter", () => {
  moveSW();
});

E.addEventListener("mouseenter", () => {
  moveE();
});

W.addEventListener("mouseenter", () => {
  moveW();
});

NE.addEventListener("mouseenter", () => {
  moveNE();
});

N.addEventListener("mouseenter", () => {
  moveN();
});

NW.addEventListener("mouseenter", () => {
  moveNW();
});

S.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
});

SE.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
});

SW.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
});

E.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
});

W.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
});

NE.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
});

N.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
});

NW.addEventListener("mouseleave", () => {
  cancelAnimationFrame(animationId);
});
