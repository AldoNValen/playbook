/*
 * Recuerda: Para usar cualquier módulo necesitas haberlo exportado.
 * Necesitas indicar el path del archivo que vas a importar aquí de la forma que se indica (este varia dependiendo en qué archivo lo importas):
 * */
const MissionCommander = require('./app/missionCommander');

const aldo = new MissionCommander("Aldo")
console.log(aldo.name)

const val = new MissionCommander("valencia")
console.log(val.name)

const Ajolonauta = new MissionCommander("Ajolonauta")
console.log(Ajolonauta.name)