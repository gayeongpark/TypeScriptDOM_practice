const title = document.querySelector<HTMLHeadingElement>(
  "div.hello:first-child h1"
);

function handleTitleClick() {
  title!.style.color = "white";
}

function handleMouseEnter() {
  title!.innerText = "Mouse is hovered!";
}
function handleMouseLeave() {
  title!.innerText = "Mouse is gone!";
}

function handleContextMenu() {
  title!.innerText = "You attempted to open a context menu!";
}

function handleWindowResize() {
  document.body.style.background = "tomato";
  title!.innerText = "You resized the window!";
}

function handleWindowCopy() {
  alert("Copied!");
}

function handleWindowOffline() {
  alert("No WIFI, please check out!");
}
function handleWindowOnline() {
  alert("You are now onine!");
}

title!.addEventListener("click", handleTitleClick);
title!.addEventListener("mouseenter", handleMouseEnter);
title!.addEventListener("mouseleave", handleMouseLeave);
title!.addEventListener("contextmenu", handleContextMenu);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
