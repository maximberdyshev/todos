export default class AuthCheck {
  // проверка вводимого логина и пароля
  static logInCheck(userData, userDataDB) {
    if (
      userData.userLogin === userDataDB.userLogin &&
      userData.userPass === userDataDB.userPass
    ) {
      localStorage.setItem('authorized', '1')
      localStorage.setItem('userName', userData.userLogin)
      return true
    } else {
      return false
    }
  }
}
