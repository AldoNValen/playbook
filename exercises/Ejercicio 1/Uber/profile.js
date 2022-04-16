const profile = {
    name: "Aldo",
    lastName: "Valencia",
    adress: "AV insurgentes 345",
    tel: 5574398453,
    getGeneralInfo: function(){
      return `This profile is to  ${this.name} his tel is ${this.tel}`
    }
   }

console.log("Nombre del repo:" + profile.name)
console.log("info general " + profile.getGeneralInfo())