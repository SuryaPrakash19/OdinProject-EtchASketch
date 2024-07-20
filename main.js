const c = document.getElementById("container");
let onMouseHold = false;
let boxes;
makeGrid(70);
function makeGrid(inp) {
  while (c.firstChild) {
    c.removeChild(c.firstChild);
  }
  for (let i = 0; i < inp * inp; i++) {
    const b = document.createElement("div");
    const l = 800 / inp;
    const s = l + "px";
    b.style.opacity = 0;
    b.style.setProperty("width", s);
    b.style.setProperty("height", s);
    b.style.backgroundColor = "red";
    b.style.border = "1px solid red";
    b.className = "box";

    c.appendChild(b);
  }
  events();
}

function events() {
  boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    box.addEventListener("mouseover", () => {
      if (onMouseHold) {
        let x = parseFloat(box.style.opacity) + 0.2;
        box.style.setProperty("opacity", x);
      }
    });
    box.addEventListener("click", () => {
      let x = parseFloat(box.style.opacity) + 0.2;
      box.style.setProperty("opacity", x);
    });
  }
}
function clearFn() {
  boxes = document.getElementsByClassName("box");
  for (let box of boxes) {
    box.style.opacity = 0;
  }
}
function inputGrid() {
  const inp = window.prompt("Enter grid dimension");
  const i = parseInt(inp);
  if (!isNaN(i) && i > 0 && i <= 100) {
    makeGrid(i);
  } else {
    window.alert("Enter a number less than 100!");
  }
}
document.addEventListener("mousedown", function () {
  onMouseHold = true;
});

document.addEventListener("mouseup", function () {
  onMouseHold = false;
});
