/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //console.log("Hello Rigo from the console!");
};
const pronombres = ["mi", "tu", "su"];
const adjetivos = ["gran", "pequeño", "rápido"];
const sustantivos = ["gato", "perro", "ratón"];

function generarNombresDeDominio(pronombres, adjetivos, sustantivos) {
  const nombresDeDominio = [];

  for (let pronombre of pronombres) {
    for (let adjetivo of adjetivos) {
      for (let sustantivo of sustantivos) {
        nombresDeDominio.push(`${pronombre}${adjetivo}${sustantivo}.com`);
        log;
      }
    }
  }

  return nombresDeDominio;
}

const dominios = generarNombresDeDominio(pronombres, adjetivos, sustantivos);
console.log(dominios);
