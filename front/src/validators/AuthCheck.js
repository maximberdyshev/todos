import API_Connector from '../API/API_Connector'

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

  // проверка авторизованности пользователя
  static async getLogin(name) {
    const checked = await API_Connector.checkLogin(name)
    if (checked.data.length > 0) {
      localStorage.setItem('authorized', '1')
    } 
  }
}
