import axios from 'axios'

export default class API_Connector {
  static async checkLogin(login) {
    const response = await axios.post('http://localhost:3001/api/users/check', {
      login: login,
    })
    return response
  }
}
