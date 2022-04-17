const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }

   
   ]

console.log("Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
explorers.forEach(explorer => console.log(explorer.name))

console.log("Imprime el stack de cada explorer, usa FOR EACH")
explorers.forEach(item => console.log(item.stack))

console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
const lstExplorar_stacks= explorers.map(lista => lista.stack)
console.log(lstExplorar_stacks)

console.log("Obtén la lista de explorers que tengan en su stack js, usa FILTER (para validar un elemento en un lista se usa el método includes)")
const explorers_con_js = explorers.filter(lista => lista.stack.includes("js"))
console.log(explorers_con_js)

console.log("Busca el primer explorer que sea de la CDMX, usa FIND")
const explorar_cdmx = explorers.find(cdmx => cdmx.city== "CDMX")
console.log(explorar_cdmx)

console.log("Obtén la suma de todos los exercises_completed, usa REDUCE")
const suma= explorers.reduce((acc,lista) => acc + lista.exercises_completed,0)
console.log(suma)
 
console.log("Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME")
const verificar = explorers.some((validar) =>  validar.missions.frontend.exercisesFinished === true)
console.log(verificar)
 
console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.")
const todos = explorers.every((validarTodo) =>  validarTodo.missions.onboarding.isFinished === true)
console.log(todos)