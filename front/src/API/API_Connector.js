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

  // создание задачи
  static async postTodo(userId, id, title) {
    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/todos',
      {
        userId: userId,
        id: id,
        title: title,
        completed: false
      }
    )
    return response
  }
}
