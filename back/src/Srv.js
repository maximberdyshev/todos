import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import knex from 'knex'
import knexfile from '../db/knexfile.js'
import router from './routes/routes.js'

dotenv.config()

const knx = knex(knexfile[process.env.KNEX_PROFILE])

const app = express()
const PORT = process.env.PORT || 3002

app.use(cors())
app.use(express.json())
app.use('/api', router)

// app.get('/api/users', (req, res) => {
//   knx('users')
//     .select({
//       user_id: 'id',
//       first_name: 'first_name',
//     })
//     .then((users) => {
//       return res.json(users)
//     })
//     .catch((err) => {
//       console.log(err)
//       return res.json({ success: false, message: 'Something wrong..' })
//     })
// })

// app.post('/api/users', (req, res) => {
//   const name = req.body.name ? req.body.name : ''
//   const email = req.body.email ? req.body.email : ''

//   if (!name) {
//     return res.json({ success: false, message: 'Name is required' })
//   }

//   knx('users')
//     .insert({ name, email })
//     .then(() => {
//       return res.json({ succes: true, message: 'User added' })
//     })
//     .catch((err) => {
//       console.error(err)
//       return res.json({
//         success: false,
//         message: 'An error occurred, please try again later.',
//       })
//     })
// })

app.listen(PORT, () => {
  console.log(`server started at: ${PORT}`)
})
