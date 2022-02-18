console.log("Ejercicios de Lógica con funciones");

// 1)
console.log("========>>>>EJERCICIO1");
console.log(`Crear una función que tome una array de números y retorne la suma de esos números.
Ejemplo: [1, 2, 3] // Debe retornar 6.\n\n`);
let array = [1, 2, 3, 4, 5];
console.log("Entrada:", array);
function addition(array1) {
  let addition = 0;
  for (let i = 0; i < array1.length; i++) {
    addition += array1[i];
  }
  return addition;
}
console.log("Salida: ", addition(array));

// 2)
console.log("========>>>>EJERCICIO2");
console.log(`Crear una función que calcule el área de un tríangulo.
Pista: la formula para calcula la altura de un triángulo es base * altura / 2 \n\n`);
let base = 5;
let altura = 90;
console.log(`Entradas: base_ ${base} altura_${altura}`);

function AreaTriangle(base, altura) {
  return (base * altura) / 2;
}

console.log("Salida: ", AreaTriangle(base, altura));

// 3)
console.log("========>>>>EJERCICIO3");
console.log(` Crear una función que transforme la cantidad de días en años.
Ejemplo: 555 => Debe retornar 1
Ejemplo: 3650 => Debe retornar 10\n\n`);
const cantDias1 = 555;
const cantDias2 = 3650;
console.log("Primera Entrada: ", cantDias1);
console.log("Segunda Entrada: ", cantDias2);
const transform = (dias) => Math.floor(dias / 365);

console.log("Primera Salida: ", transform(cantDias1));
console.log("Segunda Salida: ", transform(cantDias2));

// 4)
console.log("========>>>>EJERCICIO4");
console.log(
  `Crear una función que tome dos strings y retorne un booleano.
Si las dos strings tienen la misma cantidad de caracteres, deberá
retornar true; en el otro caso deberá retornar false.\n\n`
);
const string1 = "hola";
const string2 = "hola";
console.log(`Entradas: String1_ "${string1}" String2_ "${string2}"`);
const constadorString = (string1, string2) => string1.length === string2.length;
console.log(
  "Salida: Los String son de igual tamanio?  => ",
  constadorString(string1, string2)
);

// 5)
console.log("========>>>>EJERCICIO5");
console.log(`Crear una función que tome una string y la de vuelta, muestre la palabra la revés.
Ejemplo: hola => Debe retornar aloh \n\n`);
let newString = "hola";

console.log("Entrada:", newString);
const reverse = (string4) => {
  return string4.split("").reverse().join("");
};
console.log("Salida: ", reverse(newString));

// 6)
console.log("========>>>>EJERCICIO6");
console.log(`Crear una función que calcule si un numero es es divisible por
   5. Si es divisible debe retornar true; sino debe retornar false.\n\n`);
const num = 50;
console.log("Entrada: ", num);
const divisibleCinco = (entrada) => {
  return entrada % 5 == 0;
};
console.log("Salida: es divisible por cinco? =>", divisibleCinco(num));

// 7)
console.log("========>>>>EJERCICIO7");
console.log(`Crear una función que transforme una string en formato capital.
El formato capital es aquel en el que las primeras letras comienza con 
mayúsculas.
Ejemplo: hola mundo => Hola Mundo
Ejemplo: soy Otro ejemplo => Soy Otro Ejemplo
Ejemplo: por si todavía no queda claro => Por Si Todavía No Queda Claro\n\n`);

const palabra1 = "hola mundo soy otro";
console.log("Entrada: ", palabra1);

const capitalizar = (palabras) => {
  return palabras.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
};

console.log("Salida: ", capitalizar(palabra1));
console.log("La palabra original NO fue modificada: ", palabra1);

// 8)
console.log("========>>>>EJERCICIO8");
console.log(`Crear una función que tome una array de números y devuelva 
cuál es el número más grande de la array.
// Ejemplo: [45, 53, 88, 21, 11, 87, 66] => Debe retornar 88\n\n`);
const numeros = [45, 53, 88, 21, 11, 87, 66];
console.log("Entrada: ", numeros);
const buscarMayor = (array) => {
  let mayor = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    }
  }
  return mayor;
};
console.log("Salida : el mayor es => ", buscarMayor(numeros));
//En este caso considero simpre que el primero es el valor mas grande de allí comparo uno a uno

console.log("OTRA FORMA USANDO MATH.MAX");

const buscarMayorV2 = (array) => Math.max(...array);

console.log("Salida_2: ", buscarMayorV2(numeros));

// 9)
console.log("========>>>>EJERCICIO9");
console.log(`Remover el primer caracter de una palabra. Crear una función 
que tome una string y retorne la misma palabra sin su primer caracter.
Ejemplo: apple => pple\n\n`);
const palabra2 = "apple";
console.log("Entrada: ", palabra2);
const quitarCaracter = (string) => string.slice(1);

console.log("Salida: ", quitarCaracter(palabra2));

// 10)
console.log("========>>>>EJERCICIO10");
console.log(`Convertir una array a una string. Una función tomará una array
   de strings y se convertirá en una única string.\n\n`);
const array3 = ["es", "de", "noche", "y", "tengo", "hambre", "mal!"];
console.log("Entrada: ", array3);
const transformToString = (array) => array.join(" ");

console.log("Salida: ", transformToString(array3));

// 11) Acá encontrarán más ejercicios: https://youtu.be/PescFjv1UXM
console.log("========>>>>EJERCICIO11");
console.log("EN OTRA OCASIÓN CON MAS CALMITA...");
//

console.log(" \n\nTAREA #10\n\n");
// Ejercicios
// Escribir una función que tome una array de números por parámetros y devuelva un array con el número mayor y el menor.
// Ejemplo: [1,2,3,4, 5] => [1, 5]
console.log("========>>>>EJERCICIO1");
const array4 = [1, 2, 3, 4, 5];
console.log("Entrada: ", array);

const maxAndMin = (array) => {
  let arrayMaxMin = [];
  arrayMaxMin.push(Math.max(...array));
  arrayMaxMin.push(Math.min(...array));
  return arrayMaxMin;
};
console.log("Salida: ", maxAndMin(array4));
// Escribir una función que tome dos parámetros. una string y un caracter. La función debe devolver cuántas veces aparece ese caracter en la string. Si el caracter no aparece en la string debe retornar false.
// Ejemplo: ("hola mundo", "o") => 2 veces.
console.log("========>>>>EJERCICIO2");
const palabra = "hola mundo, de nuevo!";
const caracter = "o";
console.log("Entrada: ", palabra);
const contarCaracter = (palabra, caracter) => {
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (caracter === palabra[i]) {
      contador++;
    }
  }
  if (contador == 0) {
    return false;
  }
  contador = contador + " veces";
  return contador;
};

console.log("Salida: ", contarCaracter(palabra, caracter));
// Limpiar una array. Debemos crear una función que tome una array de múltiples datos y que solo devuelva los strings dentro de la array.
// Ejemplo: [1, 'hola', 2, true, 'mundo'] => ['hola', 'mundo']
console.log("========>>>>EJERCICIO3");
const array5 = [1, "hola", 2, true, "mundo"];
console.log("Entrada: ", array5);
const limpiarArray = (array) => {
  let salida = [];
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      salida.push(array[i]);
    }
  }
  return salida;
};

console.log("Salida", limpiarArray(array5));
// Contar vocales. Crear una función que cuente la cantidad de vocales que posee una palabra.
console.log("========>>>>EJERCICIO4");
const nuevaPalabra = "hola mundo por enesima vez XD mas vocales";
const vocales = "aeiou";
console.log("Entrada: ", nuevaPalabra);
const contarVocales = (palabra) => {
  let cantidadVocales = 0;
  for (const letra of palabra) {
    if (vocales.includes(letra.toLowerCase())) {
      cantidadVocales++;
    }
  }
  return cantidadVocales;
};

console.log("Salida: ", contarVocales(nuevaPalabra));
// Escribir una función que quite todos las vocales de una string.
// Ejemplo: (banana) => bnn
console.log("========>>>>EJERCICIO5");
const palabra3 = "banana manzana pera frutilla helado ok no!";
console.log("Entrada: ", palabra3);
const vocales2 = "aeiou";

const quitarVocales = (palabra) => {
  let nuevaPalabra1 = "";
  for (const letra of palabra) {
    if (!vocales2.includes(letra.toLowerCase())) {
      nuevaPalabra1 += letra;
    }
  }
  return nuevaPalabra1;
};
console.log("Salida: ", quitarVocales(palabra3));
// Quitar los duplicados de una array. Escribir una función que tome una array por parámetros y quite todos los valores duplicados.
// Ejemplo: [1, 1, 2,2, true, true, 'hola', 'mundo', 'hola] => [1, 2, true, hola, mundo]

const ultimoArray = [
  1,
  1,
  2,
  2,
  true,
  true,
  "hola",
  "mundo",
  "hola",
  false,
  false,
];

console.log("Entrada:", ultimoArray);
const eliminarDuplicados = (array) => {
  let unicos = [];
  for (let i = 0; i < array.length; i++) {
    if (!unicos.includes(array[i])) {
      unicos.push(array[i]);
    }
  }
  return unicos;
};

console.log("Salida: ", eliminarDuplicados(ultimoArray));

console.log("FIN PERRITO :-)...");
