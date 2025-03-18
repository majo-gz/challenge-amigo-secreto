let amigos = [];
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function agregar() {
    let nombre = document.getElementById("amigo").value;
    amigos.push(nombre);
    let item = document.createElement("li");
    item.textContent = nombre;
    lista.append(item);
}

function sortear() {
    if (amigos.length > 1) {
        let indice = Math.floor(Math.random() * amigos.length);
        resultado.innerHTML = "";
        let item = document.createElement("li");
        item.textContent = `El amigo elegido fue: ${amigos[indice]}`;
        resultado.appendChild(item);
    } else {
        alert("No hay suficientes amigos para realizar el sorteo, agrega más.");
    }
}

