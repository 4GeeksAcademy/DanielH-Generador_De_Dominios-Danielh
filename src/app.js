/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  function generadorDominio(pronoum, adj, noum, dom) {
    let dominio = [];
    for (let i = 0; i < pronoum.length; i++) {
      for (let a = 0; a < adj.length; a++) {
        for (let r = 0; r < noum.length; r++) {
          for (let e = 0; e < dom.length; e++) {
            let listaDominios = pronoum[i] + adj[a] + noum[r] + dom[e];
            dominio.push(listaDominios);
          }
        }
      }
    }

    return dominio;
  }

  var primero = ["Chocobuda", "Enfocando", "Jefe", "Sisifo"];
  var segundo = ["Código", "1001", "Hacker", "Gratis"];
  var tercero = ["Fashion", "Nómada", "Criatura", "Arquitectos"];
  var finales = [".com", ".es", ".net", ".org"];

  // inicio listado aleatorio e inclusion en index.html

  let listaDominiosAleatorios = generadorDominio(
    primero,
    segundo,
    tercero,
    finales
  );
  const dominioElement = document.querySelector("#dominio");
  const dominioAleatorio =
    listaDominiosAleatorios[
      Math.floor(Math.random() * listaDominiosAleatorios.length)
    ];
  dominioElement.innerHTML = dominioAleatorio;
  console.log(generadorDominio(primero, segundo, tercero, finales));

  // inicio listado completo e inclusion en index.html

  let listaDominiosCompleta = generadorDominio(
    primero,
    segundo,
    tercero,
    finales
  );
  const datalistElement = document.querySelector("#datalistOptions");
  for (let i = 0; i < listaDominiosCompleta.length; i++) {
    let option = document.createElement("option");
    option.value = listaDominiosCompleta[i];
    datalistElement.appendChild(option);
  }
  console.log(listaDominiosCompleta);
};
