//variables
const usuarioLogin = document.getElementById("usuarioLogin");
const passwordLogin = document.getElementById("passwordLogin");
let usuarioCorrecto = false;
//const form_login=document.querySelector(".form_login");



//definimos los listening
form_login.addEventListener("submit", validarEntradas);
//defino los campos and uso otro Admin
const campoLogin = {
  usuario: false,
  password: false,
  admin: false,
};
function verificar(entrada) {
  if (entrada.id == "usuarioLogin") {
    if (expressions.usuario.test(entrada.value)) {
      campoLogin["usuario"] = true;
      usuarioLogin.classList.remove("border_input_none");
      usuarioLogin.classList.remove("border_color_red");
      usuarioLogin.classList.add("border_color_green");
      viewError("usuario",true);
    } else {
      campoLogin["usuario"] = false;
      usuario.classLisat.add
      usuarioLogin.classList.remove()
      viewError("usuario",false);
    }
  }
  if (entrada.id == "passwordLogin") {
    if (expressions.password.test(entrada.value)) {
      campoLogin["password"] = true;
      viewError("password",true);
    } else {
      campoLogin["password"] = false;
      viewError("password",false);
    }
  }
  console.log(campoLogin);
  habilitarBtnIniciar();
}
const viewError = async(campo,valor) =>{
  try{
    switch (campo){
      case "usuario":{
        if(valor==true){
          
        }else{

        }
      break
      }
      case "password": {
        if(valor==true){

        }else{

        }
      break
      }
    }
  }
  catch(error){
    console.log(error);
  }
}
function habilitarBtnIniciar() {
  if (campoLogin.usuario && campoLogin.password) {
    document.querySelector(".form_login button").disabled = false;
  } else {
    document.querySelector(".form_login button").disable = true;
  }
}


function validarEntradas(e) {
  e.preventDefault();
  //busco en la base de datos si es correcto el usuario y contraseña
  console.log("entro al validar!! ");
  getUsuario();
}
const getUsuario = async () => {
  try {
    const response = await fetch(`${API_URL}/usuarios`);
    const usuarios = await response.json(); //aca ya tengo a todos los usuarios en forma de objeto
    validarUsuario(usuarios);
  } catch (error) {
    console.log(error);
  }
};

function validarUsuario(usuarios) {
  usuarios.forEach((usuario) => {
  

    if (usuarioLogin.value == usuario.usuario && passwordLogin.value == usuario.password) {
      usuarioCorrecto = true;
      console.log(usuario.usuario);
      console.log(usuarioLogin.value);
      console.log(usuario.password);
      console.log(passwordLogin.value)
      console.log("el usuario se encuentra en la base.");
      //debo colocar un break si encuentro el usuario
    
    } else {
      usuarioCorrecto = false;
      console.log("el usuario NO se encuentra en la base de datos");
    }
  });
}
