const btnss = [
  document.querySelector("#A1"),
  document.querySelector("#A2"),
  document.querySelector("#A3"),
  document.querySelector("#B1"),
  document.querySelector("#B2"),
  document.querySelector("#B3"),
  document.querySelector("#C1"),
  document.querySelector("#C2"),
  document.querySelector("#C3"),
];

const matriz = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let cont = 1;
const btns = document.querySelectorAll(".btn-matriz");
const btnReset = document.querySelector(".btn-reset");

for (let btn of btnss) {
  btn.addEventListener("click", imprime);
}

function imprime() {
  let img;
  cont++;
  const id = document.getElementById(this.id);

  cont % 2 == 0 ? (img = "circle") : (img = "cross");

  id.innerHTML = `<img src='assets/images/${img}.png' class='img-matriz'>`;

  console.log("clicked");
}

//Função para resetar o jogo

btnReset.addEventListener("click", reset);

function reset() {
  for (let btn of btnss) {
    const id = document.getElementById(btn.id);
    id.innerHTML = ``;
    console.log("reset");
    cont = 1;
  }
}

console.log(btns);
