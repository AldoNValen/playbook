const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {

 /*  //PUNTO 4 , REUQERIMIENTO 1
 test("1. Create a new user using the UserService", () => {
    const user = UserService.create(1, "AldoVal", "Aldo")
    expect(user.username).toBe("AldoVal")
    expect(user.name).toBe("Aldo")
    expect(user.id).toBe(1)
    expect(user.bio).not.toBeUndefined()
  })  */

  /* //PUNTO 4 , REUQERIMIENTO 2
   test("2. Get all user data in a list", () => {
    const user = UserService.create(1, "AldoVal", "Aldo")
    //enviamos un objeto y nos lo regresa , lo mostramos en forma de lista
    const userInfoInList = UserService.getInfo(user)
    expect(userInfoInList[0]).toBe(1)
    expect(userInfoInList[1]).toBe("AldoVal")
    expect(userInfoInList[2]).toBe("Aldo")
    expect(userInfoInList[3]).toBe("Sin bio")
  })
 */
   test("3. Update username", () => {
    const user = UserService.create(1, "AldoVal", "Aldo")
    UserService.updateUserUsername(user, "Niko")
    expect(user.username).toBe("Niko")
  }) 

  /* test("4. Given a list of users give me the list of usernames", () => {
    const user1 = UserService.create(1, "carlogilmar1", "Carlo")
    const user2 = UserService.create(1, "carlogilmar2", "Carlo")
    const user3 = UserService.create(1, "carlogilmar3", "Carlo")
    const usernames = UserService.getAllUsernames([user1, user2, user3])
    expect(usernames).toContain("carlogilmar1")
    expect(usernames).toContain("carlogilmar2")
    expect(usernames).toContain("carlogilmar3")
  })   */

})