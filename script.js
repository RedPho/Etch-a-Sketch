let sketchpad = document.querySelector("#sketchpad");
let pixelCount = document.querySelector("h1");
let selectedColor = "black";
let picker = document.querySelector("#colorPicker");

picker.addEventListener("input", function() {
  selectedColor = picker.value;
})

function createGrid(x) {
  for (let i = 0; i < x; i++) {
    let divRow = document.createElement("div");
    divRow.classList.add("row")
    for (let i = 0; i < x; i++) {
      let divPix = document.createElement("div");
      divPix.classList.add("pix");
      divRow.appendChild(divPix);
      divPix.addEventListener("mouseover", changeColor)
      
    }
    sketchpad.appendChild(divRow);
  }
}

createGrid(16);

function randomNum(x) {
  return Math.floor(Math.random()*x) + 1;
}

function randomColor() {
  return `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)})`;
} 

function resetGrid() {
  let count = prompt("How many squares each row and column? (Max: 100)");
  if (count > 100) {
    alert("You need to type a number that lower than 101");
    return;
  }
  count = Math.floor(parseInt(count));
  sketchpad.innerHTML = "";
  createGrid(count);
  pixelCount.innerText = count + "x" + count;
}

let reset = document.querySelector("#reset");
reset.addEventListener("click", resetGrid)

function selectColor(e) {
  selectedColor = e.target.id;
}

colors = document.querySelectorAll(".colors");
colors.forEach(color => {
  color.addEventListener("click", selectColor)
});


function changeColor(e) {
  if (selectedColor == "random") {
    e.target.style.backgroundColor = randomColor();
  }
  else {
    e.target.style.backgroundColor = selectedColor;
  }
}



// x tane div (.row)
// her dive x tane div (.pix)