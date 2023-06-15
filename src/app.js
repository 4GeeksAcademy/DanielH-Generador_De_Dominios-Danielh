/* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  const dominio = [];
  var extensiones = [".com", ".es", ".net", ".org"];
  var pronoun = ["Chocobuda", "Enfocando", "Jefe", "Sisifo"];
  var adj = ["Código", "1001", "Hacker", "Gratis"];
  var noun = ["Fashion", "Nómada", "Criatura", "Arquitectos"];

  function generadorDominio() {
    for (let i = 0; i < pronoun.length; i++) {
      for (let a = 0; a < adj.length; a++) {
        for (let r = 0; r < noun.length; r++) {
          for (let e = 0; e < extensiones.length; e++) {
            let domioRandom = pronoun[i] + adj[a] + noun[r] + extensiones[e];
            dominio.push(domioRandom);
          }
        }
      }
    }
  }
  // const dominios =
  generadorDominio();
  const dominioElement = document.querySelector("#dominio");

  const dominioAleatorio = dominio[Math.floor(Math.random() * dominio.length)];
  dominioElement.innerHTML = dominioAleatorio;
};
