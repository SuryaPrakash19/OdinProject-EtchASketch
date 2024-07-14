const c = document.getElementById("container");
let boxes;
makeGrid(16);
function makeGrid(inp) {
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  for (let i = 0; i < inp * inp; i++) {
    const b = document.createElement("div");
    const l = 800 / inp;
    const s = l + "px";

    b.style.setProperty("width", s);
    b.style.setProperty("height", s);
    b.className = "box";

    c.appendChild(b);
  }
  events();
}

function events() {
  boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "red";
    });
  }
}
function clearFn() {
  for (let box of boxes) {
    box.style.backgroundColor = "white";
  }
}
function inputGrid() {
  const inp = window.prompt("Enter grid dimension");
  makeGrid(inp);
}
