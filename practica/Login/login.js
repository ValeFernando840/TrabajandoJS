//variables
const usuarioLogin=document.getElementById("usuarioLogin");
const passwordLogin=document.getElementById("passwordLogin");
//const form_login=document.querySelector(".form_login");

//defino los campos and uso otro Admin
const campoLogin={
  usuario:false,
  password:false,
  admin:false,
};
function verificar(entrada){
  //console.log("vengo del Verificar", entrada.name)

  if(entrada.id=="usuarioLogin"){
    if(expressions.usuario.test(entrada.value)){
   
      campoLogin["usuario"]=true;
    }else{
      
      campoLogin["usuario"]=false;
    }
  }
  if(entrada.id=="passwordLogin"){
    if(expressions.password.test(entrada.value)){
     
      campoLogin["password"]=true;
    }else{
      
      campoLogin["password"]=false;
    }
  }
  console.log(campoLogin);
  habilitarBtnIniciar();
}

function habilitarBtnIniciar(){
  if(campoLogin.usuario && campoLogin.password){
    document.querySelector(".form_login button").disabled=false;

  }else{
    document.querySelector(".form_login button").disable=true;
    
  }
}
//definimos los listening
form_login.addEventListener("submit",validarEntradas);

function validarEntradas(){
  
}