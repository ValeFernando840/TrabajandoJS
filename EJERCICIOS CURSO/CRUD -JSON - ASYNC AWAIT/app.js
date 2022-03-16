//
//Promesa= Esencialmente, una promesa es un objeto devuelto al cuál se adjuntan
// funciones callback, en lugar de pasar callbacks a una función.
//fetch devuelve una promesa
//rest api
//backend api
const API_URL = "https://restcountries.com/v3.1";
// const createPromise = () => {
//   return new Promise((resolve, reject) => {
//     if (true) {
//       resolve({ data: "prueba" });
//     } else {
//       reject("Samething went wrong");
//     }
//   });
// };

// createPromise()
//   .then((dato) => console.log(dato))
//   .catch((datoM) => console.log(datoM));

// const getAllCountries = () => {
//   return fetch(`${API_URL}/all`)
//     .then((response) => response.json())
//     .then((countries) => console.log(countries));
// };
// getAllCountries();

// async function getAllCountries() {
//   const response = await fetch(`${API_URL}/all`);
//   const data = await response.json();
//   console.log(data);
// }
// getAllCountries();

const whereAmI = async (country) => {
  try {
    const response = await fetch(`${API_URL}/name/${country}`);
    const data = await response.json();
    console.log(data);
    return `Estamos en ${data[0].name.common}`;
  } catch (error) {
    console.log(error);
  }
};
whereAmI("portugal").then((city) => console.log(city));
//console.log("city =>", city);

//C => Create => POST
//R=>Retrieve =>asociado con GET
//U => Update => PATCH/PUT
//D => Delete => DELETE

//A => Alta
//B => Baja
//M => Modificación

//Node: es una manera de correr js del lado del servidor
