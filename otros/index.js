// let numero1 = "53";
// let numero2 = 8;
// let resultado;

// resultado = numero1.concat(numero2);
// document.write(resultado);
//========================================================
// //Definición de funciones
// const cuadrado = function (x) {
//   return x * x;
// };

// document.write(cuadrado(4));
//========================================================
// //funciones de Flecha
// const potencia = (base, exponente) => {
//   let resultado = 1;
//   for (let cuenta = 0; cuenta < exponente; cuenta++) {
//     resultado *= base;
//   }
//   return resultado;
// };
// console.log(potencia(2, 5));
//==================================================
//Argumentos opcionales

// function cuadrado(x) {
//   return x * x;
// }
// console.log(cuadrado(4, true, "erizo"));

/*La desventaja de esto es que es posible—incluso probable—que accidentalmente
pases la cantidad incorrecta de argumentos a las funciones. Y nadie te
dira nada acerca de eso.*/

/* Si escribes un operador = después un parámetro, seguido de una expresión,
el valor de esa expresión reemplazará al argumento cuando este no sea dado.*/

// function potencia(base, exponente = 2) {
//   let resultado = 1;
//   for (let cuenta = 0; cuenta < exponente; cuenta++) {
//     resultado *= base;
//   }
//   return resultado;
// }
// console.log(potencia(2));
//===========================================================

/*  Cierre */

/* La  capacidad de tratar a las funciones como valores, con-
binado con el hech de que las vinculaciones locales se vuelven
a crear cada vez que una funcion es llamada*/
// function envolverValor(n) {
//   let local = n;
//   return () => local;
// }
// let envolver1 = envolverValor(1);
// let envolver2 = envolverValor(2);

// console.log(envolver1());
// console.log(envolver2());

/* Con un ligero cambio, podemos convertir el ejemplo anterior en una forma
de crear funciones que multipliquen por una cantidad arbitraria.*/

// function multiplicador(factor) {
//   return (numero) => numero * factor;
// }
// let duplicar = multiplicador(2);
// console.log(duplicar(5));
/*En el ejemplo, se llama a multiplicador y esta crea un entorno en el que su
parámetro factor está ligado a 2. El valor de función que retorna, el cual se
almacena en duplicar, recuerda este entorno. Asi que cuando es es llamada,
multiplica su argumento por 2. */

//=====================================================================
/*RECURSIÓN: Basicamente la función se llama así mismo, siempre que no 
lo haga tanto que desborde la pila. La recursion permite que algunas
funciones sean escritas en un estilo diferente. */
// function potencia(base, exponente=1){
//   if(exponente==0){
//     return 1;
//   }else{
//     return base*potencia(base, exponente-1);
//   }
// };
// console.log(potencia(4,2));
/**Pero esta implementación tiene un problema: en las implementaciones típicas
de JavaScript, es aproximadamente 3 veces más lenta que la versión que usa
un ciclo. Correr a través de un ciclo simple es generalmente más barato en
terminos de memoria que llamar a una función multiples veces. */

//======================================================================
//Numbers

let a = 4;
let b = new Number(1);
let c = 4.719;
console.log(a, b);
console.log(c.toFixed(2)); //cantidad de num decimales y redondea

console.log(parseInt(c)); //devuelve solo la parte entera
console.log(parseFloat(c)); //devuelve el flotante completo

//For
// for (let i = 0; i < 10; i++) {
//   //hacer algo
// }

//For in
let animales = ["gato", "perro", "otroGato"];
for (mascota in animales) {
  document.write(animales[mascota] + "<br/>");
}