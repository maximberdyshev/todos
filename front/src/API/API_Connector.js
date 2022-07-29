import axios from 'axios'

export default class API_Connector {
  static async checkLogin(login) {
    const response = await axios.post('http://localhost:3001/api/users/check', {
      login,
    })
    return response
  }

  static async logIn(login, password, decision) {
    // console.log(login)
    const response = await axios.post('http://localhost:3001/api/users/login', {
      login,
      password,
      decision,
    })
    return response
  }
}
