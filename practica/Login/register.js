const cont_login_register = document.querySelector(".container_login_register");
const form_login = document.querySelector(".form_login");
const form_register = document.querySelector(".form_register");
const back_box_login = document.querySelector(".back_box_login");
const back_box_register = document.querySelector(".back_box_register");
const btn_register = document.getElementById("btn_register");
const btn_login = document.getElementById("btn_login");
eventsAndFunctions();
function eventsAndFunctions() {
  widthPage();
  btn_register.addEventListener("click", register);
  btn_login.addEventListener("click", login);
  window.addEventListener("resize", widthPage);
}

function register() {
  if (window.innerWidth > 850) {
    form_register.style.display = "block";
    cont_login_register.style.left = "410px";
    form_login.style.display = "none";
    back_box_register.style.opacity = "0";
    back_box_login.style.opacity = "1";
  } else {
    form_register.style.display = "block";
    cont_login_register.style.left = "0px";
    form_login.style.display = "none";
    back_box_register.style.display = "none";
    back_box_login.style.display = "block";
    back_box_login.style.opacity = "1";
  }
}

function login() {
  if (window.innerWidth > 850) {
    form_register.style.display = "none";
    cont_login_register.style.left = "10px";
    form_login.style.display = "block";
    back_box_register.style.opacity = "1";
    back_box_login.style.opacity = "0";
  } else {
    form_register.style.display = "none";
    cont_login_register.style.left = "0px";
    form_login.style.display = "block";
    back_box_register.style.display = "block";
    back_box_login.style.display = "none";
  }
}
function widthPage() {
  if (window.innerWidth > 850) {
    back_box_login.style.display = "block";
    back_box_register.style.display = "block";
  } else {
    back_box_register.style.display = "block";
    back_box_register.style.opacity = "1";
    back_box_login.style.display = "none";
    form_login.style.display = "block";
    form_register.style.display = "none";
    cont_login_register.style.left = "0px";
  }
}

// Validación

const inputs = document.querySelectorAll(".form_register input");

const expressions = {
  usuario: /^[a-zA-Z0-9\_\-]{8,30}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{8,30}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{8,12}$/, // 8 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const campos = {
  nombre: false,
  usuario: false,
  password: false,
  correo: false,
};


const validarFormulario=(e)=>{
  switch (e.target.name){
    case "nombre":
      validarCampo(expressions.nombre,e.target,"nombre");
      break;
    case "usuario":
      validarCampo(expressions.usuario,e.target,"usuario");
      break;
    case "correo":
      validarCampo(expressions.correo,e.target,"correo");
      break;
    case "password":
      validarCampo(expressions.password, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
  }
}

 const validarCampo=(expresion,input,campo)=>{
   if(expresion.test(input.value)){ 
    document.querySelector(`.grupo_${campo} p`).classList.remove("form_input_error_active");
    document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_red");
   
    document.querySelector(`.grupo_${campo} input`).classList.add("border_color_green");
    campos[campo]=true;
  }else{
    document.querySelector(`.grupo_${campo} p`).classList.add("form_input_error_active");
    document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_green");
   
    document.querySelector(`.grupo_${campo} input`).classList.add("border_color_red");
    campos[campo]=false;
    }
    if(campos[campo]==true){
    setTimeout(() => {
      document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_red");
      document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_green");
      document.querySelector(`.grupo_${campo} input`).classList.add("border_input_none");
    }, 3000);
    }else{
    setTimeout(()=>{
      document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_green");
      document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_red");
      document.querySelector(`.grupo_${campo} input`).classList.add("border_input_none");
    },3000);
    }
}
  const validarPassword2=()=>{
  const password1=document.querySelector(".grupo_password input");
  const password2=document.querySelector(".grupo_password2 input");
  if(password1.value != password2.value){
  document.querySelector(`.grupo_password2 p`).classList.add("form_input_error_active");
  document.querySelector(`.grupo_password2 input`).classList.add("border_color_red");
  document.querySelector(`.grupo_password2 input`).classList.remove("border_color_green")
  campos["password"]=false;

  }else{
  document.querySelector(`.grupo_password2 p`).classList.remove("form_input_error_active");
  document.querySelector(`.grupo_password2 input`).classList.remove("border_color_red");
  document.querySelector(`.grupo_password2 input`).classList.add("border_color_green");
  campos["password"]=true;
  }
  if(campos["password"]==true){
    setTimeout(() => {
    document.querySelector(`.grupo_password2 input`).classList.remove("border_color_red");
    document.querySelector(`.grupo_password2 input`).classList.remove("border_color_green");
    document.querySelector(`.grupo_password2 input`).classList.add("border_input_none");
    }, 3000);
  }else{
    setTimeout(()=>{
    document.querySelector(`.grupo_password2 input`).classList.remove("border_color_green");
    document.querySelector(`.grupo_password2 input`).classList.remove("border_color_red");
    document.querySelector(`.grupo_password2 input`).classList.add("border_input_none");
    },3000);
  }
}
  const btnFormRegister=document.querySelector(".form_register button");
  const nombre=document.querySelector(".grupo_nombre input");
  const usuario=document.querySelector(".grupo_usuario input");
  const correo=document.querySelector(".grupo_correo input");
  const password=document.querySelector(".grupo_password input");
  const password2=document.querySelector(".grupo_password2 input");
const habilitarBtnRegister =()=>{
    if(nombre.value && usuario.value && correo.value && password.value && password2.value){
      btnFormRegister.disabled=false;
    }else{
      btnFormRegister.disabled=true;
    }
}

events();
function events() {
  // habilitarBtnRegister();
  inputs.forEach((input) => {
    input.addEventListener("blur", validarFormulario); /**tambien lo use con keyup */
    input.addEventListener("blur",habilitarBtnRegister);

  });

}

const sendData=(e)=>{
  e.preventDefault();
  if(campos.nombre && campos.usuario && campos.correo && campos.password){
    createUser();
    document.getElementById("msj_exito").classList.remove("paragraph");
    setTimeout(()=>{
      document.getElementById("msj_exito").classList.add("paragraph");
    },3000);
  }else{
     document.getElementById("msj_error").classList.remove("paragraph");
     setTimeout(()=>{
      document.getElementById("msj_error").classList.add("paragraph");
    },3000);
  }
}
const API_URL = "http://localhost:4000";
const createUser=async()=>{
  try{
    await fetch(`${API_URL}/usuarios`,{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({
        nombre:nombre.value,
        usuario: usuario.value,
        correo:correo.value,
        password: password.value,
        rol: "client",
      })
    })
    form_register.reset();
  }catch(error){
    console.log(error);
  }
}
form_register.addEventListener("submit",sendData);