// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function mostrarAmigos() {
    // Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";// Limpiar la lista existente
    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
      }
}
function agregarAmigo(){

let nuevoAmigo = document.getElementById('amigo').value; 


if (nuevoAmigo === ""){
    alert("Por favor, inserte un nombre.");
}else{
    
    amigos.push(nuevoAmigo);
    console.log(amigos);
    limpiarCaja();
    mostrarAmigos();
    
    }
}


function sortearAmigo(){
    if(amigos.length === 0){
        alert("Por favor, inserte un nombre."); 
    } else{
        let elegirAmigo = Math.floor(Math.random()*amigos.length);
        console.log(amigos[elegirAmigo]);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = "";
        let elementoResultdo = document.createElement('li');
        elementoResultdo.textContent = `El amigo secreto es: ${amigos[elegirAmigo]}`;
        resultado.appendChild(elementoResultdo);
    }
}



function limpiarCaja() {
    document.querySelector('#amigo').value = '';}