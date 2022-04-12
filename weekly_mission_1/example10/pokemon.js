/*
  export default nos permite exportar esta clase e importara

  import MyPokemon from './pokemon.js'
*/

export default  class MyPokemon{
    constructor(name){
      this.name = name
    }
  
    sayHello () {      
        console.log('Mi pokemon ' + this.name + ' te saluda!')
      }

      sayMessage (message) {
        this.count++
        console.log('Mi pokemon ' + this.name + 'dice: ' + message)
      }
  }
