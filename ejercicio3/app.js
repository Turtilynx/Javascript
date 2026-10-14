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
console.log( puedePasar);

puedePasar = llave && permiso; //and
console.log(puedePasar);

let estaLloviendo = false ; 
const puedoSalirSinParaguas = !estaLloviendo;

console.log(puedoSalirSinParaguas);
