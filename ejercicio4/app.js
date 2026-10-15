let cantidadStock = 3;
let precio= 100;

// Condición una: si hay más de 5 unidades
if (cantidadStock >= 5 && precio > 0) {
  console.log("tenemos stock con un precio de " + precio + " €");
  document.getElementById("stock").textContent = "tenemos stock con un precio de " + precio + " €";
}

// Si la primera condición no se cumple, comprobamos si hay exactamente 5 unidades
else if (cantidadStock >= 3 && precio > 0) {
  console.log("no tenemos stock con un precio de " + precio + " €");
  document.getElementById("stock").textContent = "no tenemos stock con un precio de " + precio + " €    ";
}

// Si no se cumple ninguna de las condiciones anteriores
else {
  console.log("Quedan pocas unidades");
  document.getElementById("stock").textContent = "Quedan pocas unidades";
}
