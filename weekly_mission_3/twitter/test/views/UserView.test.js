const UserView = require('./../../app/views/UserView')

describe("Tests for UserView", () => {
  //punto 6, requerimiento 1
   test("Return an error object when try to create a new user with an null payload", () => {
    const payload = null
    const result = UserView.createUser(payload)
    // https://jestjs.io/docs/using-matchers#strings

    //aqui se verifica si el error contiene "playload no existe"
    expect(result.error).toMatch(/payload no existe/)
  })
 

  //punto 6, requerimiento 2
    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
    const payload = {username: null, name: 12, id: "id"}
    const result = UserView.createUser(payload)

    //aqui se verifica si el error contiene "necesitan tener un valor válido"
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  })  

   //punto 6, requerimiento 3
   test("Return an error object when try to create a new user with a payload with missing properties", () => {
    const payload = {username: "Username"}
    const result = UserView.createUser(payload)
    expect(result.error).toMatch(/necesitan tener un valor válido/)
  }) 

   //punto 6, requerimiento 4
   test("Create a user by a given valid payload", () => {
    const payload = {username: "AldoVal", id: 1, name: "Aldo"}
    const result = UserView.createUser(payload)
    expect(result.name).toBe("Aldo")
    expect(result.username).toBe("AldoVal")
    expect(result.id).toBe(1)
  }) 

})