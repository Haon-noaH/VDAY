const div_parent = document.querySelector(".gridcont");
const no_button = document.querySelector(".but_cont1 button");
const yes_button = document.getElementById("yes");
const S = document.getElementById("S");
const SE = document.getElementById("SE");
const SW = document.getElementById("SW");
const E = document.getElementById("E");
const W = document.getElementById("W");
const NE = document.getElementById("NE");
const N = document.getElementById("N");
const NW = document.getElementById("NW");
const img = document.querySelector(".image");
const title = document.querySelector(".title");

let animationId = null;
let currentY = 0;
let currentX = 0;
let no_clicked = false;
let yes_clicked = false;

// Starting values for YES button
let yesPaddingTop = 15;
let yesPaddingSide = 32;
let yesFontSize = 16;
let yesBorderRadius = 20;

// Timeout variables for delays
let noHoverTimeout = null;
let noLeaveTimeout = null;
let yesHoverTimeout = null;
let yesLeaveTimeout = null;

function isWithinBounds(newX, newY) {
  const buttonRect = no_button.getBoundingClientRect();
  const buttonWidth = buttonRect.width;
  const buttonHeight = buttonRect.height;

  const originalLeft = buttonRect.left - currentX;
  const originalTop = buttonRect.top - currentY;

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

// NO button with delay
no_button.addEventListener("mouseenter", () => {
  clearTimeout(noLeaveTimeout);
  no_button.style.cursor = "pointer";
  no_button.style.paddingTop = "16px";
  no_button.style.paddingBottom = "16px";
  no_button.style.paddingLeft = "33px";
  no_button.style.paddingRight = "33px";

  if (!no_clicked) {
    noHoverTimeout = setTimeout(() => {
      img.src = "nailong/images.png";
      title.textContent = "Geh ganyan ka hmmph!";
      title.style.color = "rgb(0, 0, 0)";
      title.style.fontFamily = "'calibri'";
    }, 100);
  }
});

no_button.addEventListener("mouseleave", () => {
  clearTimeout(noHoverTimeout);
  no_button.style.paddingTop = "15px";
  no_button.style.paddingBottom = "15px";
  no_button.style.paddingLeft = "32px";
  no_button.style.paddingRight = "32px";

  if (!no_clicked) {
    noLeaveTimeout = setTimeout(() => {
      img.src = "nailong/cupid.png";
      title.textContent = "YOU WILL BE MY VALENTINE!";
      title.style.color = "rgb(238, 42, 42)";
      title.style.fontFamily = "'heartland', cursive";
    }, 100);
  }
});

no_button.addEventListener("click", () => {
  img.src = "nailong/iyak.png";
  title.textContent = "Di mo na siguro ako love!";
  title.style.color = "rgb(0, 0, 0)";
  title.style.fontFamily = "'calibri'";
  no_clicked = true;

  // Grow YES button when NO is clicked
  yesPaddingTop += 10;
  yesPaddingSide += 20;
  yesFontSize += 6;
  yesBorderRadius += 10;

  yes_button.style.paddingTop = yesPaddingTop + "px";
  yes_button.style.paddingBottom = yesPaddingTop + "px";
  yes_button.style.paddingLeft = yesPaddingSide + "px";
  yes_button.style.paddingRight = yesPaddingSide + "px";
  yes_button.style.fontSize = yesFontSize + "px";
  yes_button.style.borderRadius = yesBorderRadius + "px";
});

// YES button with delay
yes_button.addEventListener("mouseenter", () => {
  clearTimeout(yesLeaveTimeout);
  yes_button.style.cursor = "pointer";

  // Grow padding on hover
  yes_button.style.paddingTop = yesPaddingTop + 1 + "px";
  yes_button.style.paddingBottom = yesPaddingTop + 1 + "px";
  yes_button.style.paddingLeft = yesPaddingSide + 1 + "px";
  yes_button.style.paddingRight = yesPaddingSide + 1 + "px";

  if (!yes_clicked) {
    yesHoverTimeout = setTimeout(() => {
      img.src = "nailong/kilig sobra.png";
      title.textContent = "YIEEEE! Crush mo ko noh";
      title.style.color = "rgb(238, 42, 42)";
      title.style.fontFamily = "'heartland', cursive";
    }, 100);
  }
});

yes_button.addEventListener("mouseleave", () => {
  clearTimeout(yesHoverTimeout);

  // Reset to base padding
  yes_button.style.paddingTop = yesPaddingTop + "px";
  yes_button.style.paddingBottom = yesPaddingTop + "px";
  yes_button.style.paddingLeft = yesPaddingSide + "px";
  yes_button.style.paddingRight = yesPaddingSide + "px";

  if (!yes_clicked) {
    yesLeaveTimeout = setTimeout(() => {
      img.src = "nailong/cupid.png";
      title.textContent = "YOU WILL BE MY VALENTINE!";
      title.style.color = "rgb(238, 42, 42)";
      title.style.fontFamily = "'heartland', cursive";
    }, 100);
  }
});

yes_button.addEventListener("click", () => {
  img.src = "nailong/kiss.png";
  title.textContent = "YAY! I LOVE YOU TOO!";
  title.style.color = "rgb(238, 42, 42)";
  title.style.fontFamily = "'heartland', cursive";
  yes_clicked = true;
});
