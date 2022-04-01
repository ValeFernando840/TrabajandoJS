//
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
  usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};

const campos = {
  usuario: false,
  nombre: false,
  password: false,
  correo: false,
  telefono: false,
};


const validarFormulario=(e)=>{
  switch (e.target.name){
    case "usuario":
      validarCampo(expressions.usuario,e.target,"usuario");
  }
}

 const validarCampo=(expresion,input,campo)=>{
   console.log(campo);
   if(expresion.test(input.value)){ 
    document.querySelector(`.grupo_${campo} p`).classList.remove("form_input_error_active");
    document.querySelector(`.grupo_${campo} input`).classList.add("border_color_green");
    setTimeout(() => {
    document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_green")
    }, 4000);
    campos[campo]=true;
  }else{
    document.querySelector(`.grupo_${campo} p`).classList.add("form_input_error_active");
    document.querySelector(`.grupo_${campo} input`).classList.remove("border_input_none");
    document.querySelector(`.grupo_${campo} input`).classList.add("border_color_red");
    setTimeout(()=>{
      document.querySelector(`.grupo_${campo} input`).classList.remove("border_color_red");
      document.querySelector(`.grupo_${campo} input`).classList.add("border_input_none");
    },4000);
    campos[campo]=false;
    }
}


events();
function events() {
  inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
  });
}