/*
 * Require es el estándar de CommonJS para exportar módulos en JS
 * Se necesita específicar la ruta del script de js a importar en este script
 * */
/* //Primer ejemplo basico
describe("Esto es una suite de pruebas", () => {
  test('Caso de prueba 1', () => {
    // se puede usar el codigo como se desee
    //const result = 1 + 2
    const result = 10
    //se valida el resultado esperado
    expect(result).toBe(10);
  });
}) */


 const MissionCommander = require('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
  test('1) Create a mission commander objet', () => {
    const myMissionCommander = new MissionCommander("Woopa")

    // el primero falla porque se envia "Woopa" pero se espera "aldo"
    //expect(myMissionCommander.name).toBe("aldo");

    //el segundo resulta bien porque se envia "Woopa" y se espera recibir un "Woopa"
    expect(myMissionCommander.name).toBe("Woopa");
  });
}) 

