//declaracion de variables

//variables de edad

let edad = 18;
console.log(edad);
document.getElementById("edad").textContent =edad;

//variable de plazas

let plazas = 10;
console.log(plazas);
document.getElementById("plazas").textContent = plazas;
let plazasDisponibles = 3;
console.log(plazasDisponibles);

// variable de precio

let precio = 100;
console.log(precio);
document.getElementById("precio").textContent = precio;

//variable de estudiante

let estudiante = true;
console.log(estudiante);

//condicionales de plazas

if (plazasDisponibles > 5) {
  console.log("Hay suficientes plazas disponibles.");

  document.getElementById("mensaje-plazas").textContent =
    "Hay suficientes plazas disponibles.";

} else if (plazasDisponibles > 0) {

  console.log("Quedan pocas plazas disponibles.");

  document.getElementById("mensaje-plazas").textContent =
    "Quedan pocas plazas disponibles.";
}

//condicionales de precio

if (estudiante) {
  console.log("El precio es de " + precio * 50 + " € para estudiantes.");
}

if (edad >= 18 && plazasDisponibles > 0) {
  console.log("puede realizar la reserva");
  document.getElementById("reserva").textContent = "puede realizar la reserva";
}

edad<= 18 ?
console.log("puede realizar la reserva") : console.log("no puede realizar la reserva");
document.getElementById("reserva").textContent = edad <= 18 ? "puede realizar la reserva" : "no puede realizar la reserva";

