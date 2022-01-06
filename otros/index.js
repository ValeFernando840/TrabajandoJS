/*Introducción ¿Ques es JavaScript?
	-Lenguaje de programación
	-Interpretado
	-Orientado a Objetos
	-Imperativo
	-Case sensitive (Upper and lower case)
	-Basado en prototipos/ instancias/ classless
	-tipado debil (un var puede pasar de int a float a string etc.)
	-Lenguaje dinamico (la var se adapta al dato).
	-ECMASCRIPT (5.1 6 7, 8, Next)


Formas de Enlazar Javascript
	- En linea
	- Como contenido en la etiqueta <script>
	- Como contenido en un archivo de formato .js
	- Con un Require
	
Variables
	-Una variable espacio que se aloja en memoria
	- Tipos de Datos: string, number, boolean 
	- Tipo de dato no primitivo: symbol
	- Casos especiales: Undefined, Null, Nan
	- Scope
	- Hosting
	- Tipos de Variables (Let, Var, Const)
	- Crear multiples variables (separandolas con coma) -> Let nombre1= "Jorge", nombre2 ="pedro"

	Variables
	- use let
	- No puede comenzar con número
	- No puede llevar guion medio, ni tener espacios
	
	Tipos de Datos
	-Primitives:
		numbers -int/float use poit 1.5 example
		** uso para potencia
		Strings
			let firtString="holi";
			interpolacion de texto `${firstString} ${secondString}` 
		boolean	
			true false
		Null
			let iAnNull = null;
		Undefined
			let iAmUndefined

		Symbol & BigInt (big integer)

		Inmutables
		let batr= 'bar'
		console.log('Bar inmutable ==>', bar);
		let barMayus= bar.toUpperCase();
		
	-Objetos o Compuestos:


  =>variables let var const
  *let tiene menos alcance 
  *var es de alcance global
  *const se usa para definir una variable que no cambiara a lo largo del programa(cte)

  => declaración e inicialización
  let num; <== se declaro una variable num
  num = 10; <== se inicializo una variable con el valor 10
  let num=10; <== se declaro y inicializo una variable num con valor 10
  si solo se declara su valor por defecto es Undefined

  => Scope es el alcance un de una variable
  =>NaN Not a Number

  =>concat sirve para realizar concatenación pero para ello es necesario que almenos uno se
  de tipo string (definido como metodo de cadena)
   
  
  */

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

// let a = 4;
// let b = new Number(1);
// let c = 4.719;
// console.log(a, b);
// console.log(c.toFixed(2)); //cantidad de num decimales y redondea

// console.log(parseInt(c)); //devuelve solo la parte entera
// console.log(parseFloat(c)); //devuelve el flotante completo

/*FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS*/
// funcionDeclarada();

// function funcionDeclarada() {
//   console.log(`esta es una función declarada, puede invocarse en cualquier
//   parte de nuestro código, incluso antes de que la funcion sea declarada.`);
// }

// funcionDeclarada();
// funcionExpresada(); // se llama antes de ser inilizalizada.
// //funcion anonima
// const funcionExpresada = function(){
//   console.log(`Esto es una función explresada,es decir,
//   una función que se le ha asignado como valor una variable, si invocamos esta función antes de su definicion JS
//   nos dirá "Can not access 'funcionExpresada'
//   before initialization"`);
// }
// funcionExpresada();

//============================================================================

/*OBJETOS */

// const b = {};
// console.log(b);
// const c = new Object();
// console.log(c);
// /*Dentro de un objeto a las variables se les van a
// llamar atributos/ propiedades y a las funciones se
// les llama métodos */
// const Alexis = {
//   nombre: "Alexis",
//   apellido: "Vale",
//   edad: 26,
//   pasatiempos: ["correr", "programar", "estudiar", "jugar"],
//   estadoCivil: "soltero",
//   contacto: {
//     email: "vale.alexis18@gmail.com",
//     facebook: "vale alexis",
//     movil: "381-3522293",
//   },
//   saludar: function () {
//     console.log("hola: ");
//   },
// };

// console.log(Alexis);
// console.log(Alexis.nombre);

// console.log(Object.keys(Alexis)); //permite listar todas las llaves del objeto.
// console.log(Object.values(Alexis)); //devuelve los valores del objeto
// console.log(Alexis.hasOwnProperty("nombre"));//retorna true o false si tiene o no la propiedad "nombre"
//=============================================================================

//For
// for (let i = 0; i < 10; i++) {
//   //hacer algo
// }

//For in
// let animales = ["gato", "perro", "otroGato"];
// for (mascota in animales) {
//   document.write(animales[mascota] + "<br/>");
// }
//==============================================================================

// /*Manejo de Errores -TRY CATCH FINALLY */

// try {
//   console.log("En el Try se agrega el código a evaluar");
//   noExiste;
// } catch (error) {
//   console.log("Catch, captura cualquier error surgido o lanzado en el Try");
// } finally {
//   console.log(
//     "el bloque finally se ejecutará siempre al final de un bloque TRY-CATCH"
//   );
// }

// try {
//   let numero = 10;

//   if (isNaN(numero)) {
//     throw new Error("El caracter introducido no es un Numero");
//   }
//   console.log(numero * numero);
// } catch (error) {
//   console.log(`Se produjo el siguiente error ${error}`);
// }

// //Destructuración de Objetos y Arreglos
// const numeros = [1, 2, 3];
// //Sin destructuración
// let uno = numeros[0],
//   dos = numeros[1],
//   tres = numeros[2];
// console.log(uno, dos, tres);
// //Con destruturación
// const [one, two, three] = numeros;
// console.log(one, two, three);

// let persona = {
//   nombre: "Alex",
//   apellido: "Vale",
//   edad: "26 ",
// };

// let { nombre, apellido, edad } = persona;
// console.log(nombre, apellido, edad);

/*OBJETOS LITERALES */
// let nombre = "koko";
// edad = 16;
// /**El nombre de la propiedad es igual al nombre de la variable */
// const dog = {
//   nombre,
//   edad,
//   raza: "nose",
//   ladrarFuncion() {
//     console.log("ladrar");
//   },
// };

/**PARÁMETROS REST & OPERADOR SPREAD*/
//Los parametros Rest son una forma de ir agregando parametros inf

// function sumar(a, b, ...c) {
//   let resultado = a + b;
//   c.forEach(function (n) {
//     resultado += n;
//   });

//   return resultado;
// }
// console.log(sumar(1, 2, 7, 5, 5));

// const arr1 = [1, 2, 3, 4, 5],
//   arr2 = [6, 7, 8, 9, 0];
// console.log(arr1, arr2);

// const arr3 = [...arr1, ...arr2]; //spread operator
// console.log(arr3);

/**Funciones Flecha/Arrow Function */

const saludar = (nombre) => {
  console.log(`hola ${nombre}`);
};

saludar("maria");

// const sumar= function(a,b){
// 	return a+b;
// };

const sumar2 = (a, b) => a + b;

console.log(sumar2(8, 9));

const funcionDeVariasLineas = () => {
  console.log("Uno");
  console.log("Dos");
  console.log("Tres");
};

funcionDeVariasLineas();

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(function (popo, index) {
  console.log(`El elemento ${popo} esta en la posición ${index}`);
});
//con arrow function
numeros.forEach((popo, index) => {
  console.log(`El elemento ${popo} esta en la posición ${index}`);
});

const perro = {
  nombre: "kenai",
  ladrar: () => {
    console.log(this);
  },
};
perro.ladrar();
