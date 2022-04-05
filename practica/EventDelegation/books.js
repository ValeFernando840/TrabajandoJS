(function(){ //immediately invoked function
  'use strict';
  const books=document.querySelector('#books');
  books.addEventListener('click',function(e){
   if(e.target){
     if(e.target.matches('a#book4')){
      console.log(e.target.innerText, 'Comprar libro: https://www.amazon.com/-/es/Paulo-Coelho/dp/0062511408')
     }else{
       console.log(e.target.innerText,'fue clickeado(con event delegation)');
     }
   }
  },false)
})();