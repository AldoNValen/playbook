const travel = {
    name: "Aldo",
    inicio: "AV insurgentes 345",
    fin: "Central de autobuses TAPO",
    tel: 5574398453,
    Pay: "tarjeta debito",
    getGeneralInfo: function(){
      return `inicio in   ${this.inicio} and destino is ${this.fin}`
    }
   }

console.log("Nombre del usuario:" + travel.name)
console.log("info general " + travel.getGeneralInfo())