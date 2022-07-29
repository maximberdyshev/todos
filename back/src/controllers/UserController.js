import knex from 'knex'
import knexfile from '../../db/knexfile.js'
import dotenv from 'dotenv'

dotenv.config()

const knx = knex(knexfile[process.env.KNEX_PROFILE])

export default class UserController {
  // проверка api и взаимодействия с БД.
  static getThis = (req, res) => {
    knx('users')
      .select({
        user_id: 'id',
        first_name: 'first_name',
      })
      .then((users) => {
        return res.json(users)
      })
      .catch((err) => {
        console.log(err)
        return res.json({ success: false, message: 'Something wrong..' })
      })
  }

  static register = (req, res) => {
    // регистрация нового пользователя
    knx('users')
      .select()
      .then()
      .catch((err) => {
        console.log(err)
        return res.json({ status: 501, message: 'Not implemented' })
      })
  }

  static login = (req, res) => {
    // вход пользователя в систему
    if (req.body.decision == 1) {
      knx('users')
      .update({
        user_status: true,
      })
      .where({
        login: req.body.login,
        pass: req.body.password,
      })
      .then((state) => {
        return res.json(state)
      })
      .catch((err) => {
        console.log(err)
        return res.json({ status: 501, message: 'Not implemented' })
      })
    } else {
      knx('users')
      .update({
        user_status: false,
      })
      .where({
        login: req.body.login,
      })
      .then((state) => {
        return res.json(state)
      })
      .catch((err) => {
        console.log(err)
        return res.json({ status: 501, message: 'Not implemented' })
      })
    }
  }

  static check = (req, res) => {
    // проверка авторизации
    knx('users')
      .select({
        user_status: 'user_status',
      })
      .where({
        login: req.body.login,
      })
      .then((state) => {
        return res.json(state)
      })
      .catch((err) => {
        console.log(err)
        return res.json({ status: 501, message: 'Not implemented' })
      })
  }
}
