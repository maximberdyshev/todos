import axios from 'axios'

export default class API_Connector {
  // получение списка пользователей при логине
  static async getUser() {}

  // регистрация нового пользователя
  static async postUser() {}

  // получение списка всех задач
  static async getAllTodos(limit = 10, number = 1) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos',
      {
        params: {
          _limit: limit,
          _page: number,
        },
      }
    )
    return response
  }
}
