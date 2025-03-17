// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

const amigo = document.getElementById("amigo");
const buttonAdd = document.querySelector(".button-add");
const listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
  if (amigo.value === "") {
    alert("Por favor, inserte un nombre.");
    return;
  } else {
    amigos.push(amigo.value);
    amigo.value = "";
    listarAmigos();
  }
}

function listarAmigos() {
  listaAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceAleatorio];
    listaAmigos.innerHTML = `<li class="li-ganador">El amigo secreto sorteado es: ${ganador}</li>`;
    amigos = [];
  } else {
    alert("¡Agrega amigos para comenzar el sorteo!");
  }
}
