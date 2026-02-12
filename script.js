const div_parent = document.querySelector(".gridcont"); // This is what moves
const no_button = document.querySelector(".but_cont1 button"); // The actual NO button
const S = document.getElementById("S");
const SE = document.getElementById("SE");
const SW = document.getElementById("SW");
const E = document.getElementById("E");
const W = document.getElementById("W");
const NE = document.getElementById("NE");
const N = document.getElementById("N");
const NW = document.getElementById("NW");
const img = document.getElementById("image");
let animationId = null;
let currentY = 0;
let currentX = 0;
let clicked = false;

function isWithinBounds(newX, newY) {
  const buttonRect = no_button.getBoundingClientRect();
  const buttonWidth = buttonRect.width;
  const buttonHeight = buttonRect.height;

  // Calculate the original position of the button (before any transform)
  const originalLeft = buttonRect.left - currentX;
  const originalTop = buttonRect.top - currentY;

  // Calculate where the button would be with the new transform
  const finalLeft = originalLeft + newX;
  const finalTop = originalTop + newY;
  const finalRight = finalLeft + buttonWidth;
  const finalBottom = finalTop + buttonHeight;

  return (
    finalLeft >= 0 &&
    finalRight <= window.innerWidth &&
    finalTop >= 0 &&
    finalBottom <= window.innerHeight
  );
}

function moveS() {
  const newY = currentY + 4;
  if (isWithinBounds(currentX, newY)) {
    currentY = newY;
    div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
  animationId = requestAnimationFrame(moveS);
}

function moveSE() {
  const newY = currentY + 4;
  const newX = currentX + 4;
  if (isWithinBounds(newX, newY)) {
    currentY = newY;
    currentX = newX;
    div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
  animationId = requestAnimationFrame(moveSE);
}

function moveSW() {
  const newY = currentY + 4;
  const newX = currentX - 4;
  if (isWithinBounds(newX, newY)) {
    currentY = newY;
    currentX = newX;
    div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
  animationId = requestAnimationFrame(moveSW);
}

function moveE() {
  const newX = currentX + 4;
  if (isWithinBounds(newX, currentY)) {
    currentX = newX;
    div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
  animationId = requestAnimationFrame(moveE);
}

function moveW() {
  const newX = currentX - 4;
  if (isWithinBounds(newX, currentY)) {
    currentX = newX;
    div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
  animationId = requestAnimationFrame(moveW);
}

function moveNE() {
  const newY = currentY - 4;
  const newX = currentX + 4;
  if (isWithinBounds(newX, newY)) {
    currentY = newY;
    currentX = newX;
    div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
  animationId = requestAnimationFrame(moveNE);
}

function moveN() {
  const newY = currentY - 4;
  if (isWithinBounds(currentX, newY)) {
    currentY = newY;
    div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
  animationId = requestAnimationFrame(moveN);
}

function moveNW() {
  const newY = currentY - 4;
  const newX = currentX - 4;
  if (isWithinBounds(newX, newY)) {
    currentY = newY;
    currentX = newX;
    div_parent.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
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

no_button.addEventListener("mouseenter", () => {
  if (!clicked) {
    img.src = "nailong/images.jpeg";
  }
});

no_button.addEventListener("mouseleave", () => {
  if (!clicked) {
    img.src = "nailong/cupid.jpg";
  }
});

no_button.addEventListener("click", () => {
  img.src = "nailong/iyak.jpg";
  clicked = true;
});
