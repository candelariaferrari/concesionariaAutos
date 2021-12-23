let autos = require('./autos')
let concesionaria = {
  listaAutos: autos,
  buscarAuto: function (patente) {
    for (let i = 0; i < autos.length; i++) {
      if (autos[i].patente === patente) {
        //let autoEncontrado = JSON.stringify(autos[i]);
        let autoEncontrado = autos[i];
        return autoEncontrado;
        //return JSON.stringify(autos[i]); (me pasaria todo el auto)
      }
    }
    return null;
  }
}
let resultado= concesionaria.buscarAuto('APL123')
console.log("auto: " + resultado)