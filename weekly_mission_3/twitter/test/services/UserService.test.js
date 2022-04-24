const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

  //PUNTO 4 , REUQERIMIENTO 1
 test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "AldoVal", "Aldo")
    expect(user.username).toBe("AldoVal")
    expect(user.name).toBe("Aldo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })  

   //PUNTO 4 , REUQERIMIENTO 2
   test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "AldoVal", "Aldo")
    //enviamos un objeto y nos lo regresa , lo mostramos en forma de lista
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("AldoVal")
    expect(userInfoInList[2]).toBe("Aldo")
    expect(userInfoInList[3]).toBe("Sin bio")
  })
 

  //PUNTO 4 , REUQERIMIENTO 3
   test("3. Update username", () => {
    const user = UserService.create(1, "AldoVal", "Aldo")
    UserService.updateUserUsername(user, "Niko")
    expect(user.username).toBe("Niko")
  })  

  //PUNTO 4 , REUQERIMIENTO 3
   test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "AldoValUno", "Aldo")
    const user2 = UserService.create(1, "AldoValDos", "Aldo")
    const user3 = UserService.create(1, "AldoValTres", "Aldo")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    expect(usernames).toContain("AldoValUno")
    expect(usernames).toContain("AldoValDos")
    expect(usernames).toContain("AldoValTres")
  })   

})