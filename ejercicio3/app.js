let a = 7;
let b = 3;
let c = a < 3;
console.log(c);

c = a < b;
console.log(c);

let d;
d = a !== b;
console.log(d); //true

//comparadores lógicos

let puedePasar;
let llave = true;
let permiso = false;
let jefe = true;

//puede pasar true si tiene la llave o el permiso

puedePasar = llave || permiso; //or alternativa
console.log(puedePasar);

puedePasar = llave && permiso; //and
console.log(puedePasar);

let estaLloviendo = false;
const puedoSalirSinParaguas = !estaLloviendo;

console.log(puedoSalirSinParaguas);

//actividades de coleccion de ejercicios 
//ejercicio11
let x=8<3;
console.log(x);

let y=2<1;
console.log(y);

//ejercicio 12
let z = 5 >=5;
console.log(z);

let w = 4 <= 3;
console.log(w);

//ejercicio 13

let f = "10" == 10; 
console.log(f);

let g = "10" === 10;
console-log(g);

//ejercicio 14 

let h = 7 != "7";
console.log(h);

let i = 7 !== "7";
console.log(i);

//ejercicio 15 

const precio1 = 12.5;
const precio2 = 12.99;

const esMasBarato = precio1 > precio2; 
console.log(esMasBarato);

//ejercicio 16 

const tieneDni = true;
const tieneCita = true; 
const puedeEntrar = tieneDni && tieneCita;
console.log(puedeEntrar);

//ejercicio 17

const  festivo = false;
const domingo = true;
const queDiaEs = festivo || domingo;
console.log(queDiaEs) || true;

//ejercicio 18 

const encendido = true ; 
const apagado = !encendido;
console.log(apagado) // false; 

//ejercicio 19 

const nota = 70; 
const asistencia = 80; 
const aprueba = (nota >= 50) && (asistencia >= 75);
console.log(aprueba); // true 

//ejeercicio 20 







