console.log("POO")

//objeto de js
const woopa_obj={
    name:"Woopa",
    mission: "Node JS",
    age:"12",
    color: "pink"
}

/*
como crar una clase
como instanciar un objeto de una clase
instanciar objetos d euna misma clase
como agregar el constructor para guardar atributos al crear
crear metodos
*/
//crear una clase
class Ajolonauta{
    constructor(name,mission,age,color){
    this.name=name
    this.mission=mission
    this.age=age
    this.color=color
        }

    sayHallo(){
       // return "hola"
        return `${this.name} dice hola`
    }

}

console.log(Ajolonauta)

/* const woopa=new Ajolonauta() // instanciar un objeto
const wooper=new Ajolonauta() // instanciar un objeto
const woopy=new Ajolonauta() // instanciar un objeto , objeto instanciado de una clase */
const woopa_obj_js={} //objeto de java script 
console.log(woopa_obj_js)

/* console.log(woopa)
console.log(wooper)
console.log(woopy)
console.log(woopa_obj_js) */

const woopa=new Ajolonauta("Woopa","Noe JS",18,"Azul")  // instanciar un objeto , objeto instanciado de una clase */
console.log(woopa)

console.log(woopa.sayHallo())

const wooper=new Ajolonauta("wooper","java",10,"gris")
console.log(wooper.name)


