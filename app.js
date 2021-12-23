let autos = require('./autos')
let concesionaria = {
  autos: autos, //lista de autos
  buscarAuto: function (patente) {
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].patente === patente) {
        /* asi funciona en el visual
        let autoEncontrado = JSON.stringify(autos[i]); // devuelve todos los datos del auto
        return autoEncontrado; */
        /* asi funciona en el playground */
        let autoEncontrado = autos[i];
        return autoEncontrado;
      }
    }
    return null;
  },
  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
    if (auto === null) {
      return console.log("Ya se vendio")
    }
    else {
      return 'Marca: ' + auto.marca + ' - Modelo: ' + auto.modelo + ' - Auto vendido: ' + (auto.vendido = true) ;
    }
  },
 /*  autosParaLaVenta: function(){
    return autos = this.autos.filter(function (elemento){
      return !elemento.vendido
   })
  } */
}
let resultado = concesionaria.autosParaLaVenta(true)
console.log(resultado)