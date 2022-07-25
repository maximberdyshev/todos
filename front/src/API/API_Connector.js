import axios from 'axios'

export default class API_Connector {
  static async checkLogin(login) {
    const response = await axios.get('http://localhost:3001/api/users/check', {
       params: {
        login: this.login,
       }
    })
    return response
  }
}
