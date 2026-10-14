let precio = 25;
let cantidad = 3;
let descuento = 5;

//operador de suma

let suma = precio + precio;
console.log(suma);

//operador de resta

let resta = precio - descuento;
console.log(resta); //resta ahora vale 20

resta = suma - precio;
console.log(resta);

//operador de multiplicación

let multiplicación = precio + cantidad;
console.log(multiplicación); //multiplicación ahora vale 75

//operador de división

let division = precio / cantidad;
console.log(division); //division ahora vale 8.33333333

//operador de módulo

let modulo = precio % cantidad;
console.log(modulo); //resto de la division de precio entre cantidad

//iva
let iva = (precio * 21) / 100; //precio *0.21
console.log(iva); //iva ahora vale 5.25

//operadores de asignación

let precioTotal = precio + 10;
console.log(precioTotal); //precioTotal ahora vale 30.25

let carrito;
carrito += 10; //carrito + 10
console.log(carrito); //carrito ahora vale 10

carrito = -5; //carrito -5
console.log(carrito); //carrito ahora vale 5

carrito = carrito - 5;
console.log(carrito); //carrito ahora vale 0
