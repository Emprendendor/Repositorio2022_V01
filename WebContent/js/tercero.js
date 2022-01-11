


function t(r) {
    if (n[r])
        return n[r].exports;
    var o = n[r] = { i: r, l: !1, exports: {} };
    return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports;
}



 function  MiPrueba () {
        var x = 5;
         
      //  var persona = new Array("Julio", "22", "true");
          var persona = "asaasas";
    //    for( var a = 0 ;  a < 2 ; a++  ) {
    //  alert("array indice " +  a +   persona);
    //}
    
     var datospais = {pais:"México", capital:"Ciudad de México", poblacion:8900000}; 
     var datofinal = "";
     var x;
        for (x in datospais) {
             datofinal += datospais[x] + " ";
        }
        document.getElementById("ejemplo").innerHTML = datofinal;
    var paso;
    for (paso = 0; paso < 5; paso++) {
            // Se ejecuta 5 veces, con valores desde paso desde 0 hasta 4.
            console.log('Dando un paso al Este');
        };
  
}

  