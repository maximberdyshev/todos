import API_Connector from '../API/API_Connector'

export default class AuthCheck {
  // проверка вводимого логина и пароля
  static async userLogIn(userData, decision) {
    const logIn = await API_Connector.logIn(
      userData.userLogin,
      userData.userPass,
      decision
    )
    if (logIn.data === 1) {
      localStorage.setItem('authorized', '1')
      localStorage.setItem('userName', userData.userLogin)
      return true
    } else {
      return false
    }
  }

  // проверка авторизованности пользователя
  static async checkLogin(name) {
    if (name) {
      const checked = await API_Connector.checkLogin(name)
      if (checked.data[0].user_status) {
        localStorage.setItem('authorized', '1')
      }
    }
  }
}
