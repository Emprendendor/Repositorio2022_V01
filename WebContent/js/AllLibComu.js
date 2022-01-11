var NombrePersona = "Andres";
// Crockford's preference - parens on the inside

(function() {
  console.log('Welcome to the Internet. Please follow me.1');
}());

//The OPs example, parentheses on the outside
(function() {
  console.log('Welcome to the Internet. Please follow me.2');
})();

//Using the exclamation mark operator
//https://stackoverflow.com/a/5654929/1175496
!function() {
  console.log('Welcome to the Internet. Please follow me.3');
}();

//The OPs example, parentheses on the outside
(function() {
  console.log('Welcome to the Internet. Please follow me.4');
});
var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});

console.log( doubles);


    function mostrarMensaje1() {
  // alert('AllLibComu.js   function mostrarMensaje()  evento onload');
//     document.getElementsByTagName("pre").item(0).style.setProperty("display",valor);   
//     var imagenes = document.getelementByTagNamed("img");
//         
//     
//     for( var a = 0;  a < imagenes.length  ; a++) {
//    	 
//    	 
//     };
//     
     return "adios";
        
    
    };


    function mostrarPropiedades(objeto, nombreObjeto) {
  	  var resultado = ``;
  	  for (var i in objeto) {
  	    //objeto.hasOwnProperty se usa para filtrar las propiedades del objeto
  	    if (objeto.hasOwnProperty(i)) {
  	        resultado += `${nombreObjeto}.${i} = ${objeto[i]}\n`;
  	    }
  	  }
  	  return resultado;
  }
  
/*    let bg = scene.backgroundImage()
    let list = [1, 2]
    bg.print(""+ list[1], 0, 0)*/
    

    