//variables


//
const campoLogin={
  usuario:false,
  password:false,
};

function verificar(entrada){
  console.log(entrada.name)
  if(expressions.usuario.test(entrada.value)){
    console.log("entrada Usuario Correcta");
    campoLogin["usuario"]=true;
  }else{
    console.log("entrada Usuario Incorrecta");
    campoLogin["usuario"]=false;
  }
  if(expressions.password.test(entrada.value)){
    console.log("entrada Password correcta");
    campoLogin["password"]=true;
  }else{
    console.log("entrada Password incorrecta");
    campoLogin["password"]=false;
}
  console.log(campoLogin);
  habilitarBtnIniciar();
}
function habilitarBtnIniciar(){
  if(campoLogin.usuario && campoLogin.password){
    document.querySelector(".form_login button").disabled=false;
    console.log("se desactivo el Disabled");
  }else{
    document.querySelector(".form_login button").disable=true;
  }
}