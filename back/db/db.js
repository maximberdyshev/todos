import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config({path: '../.env'})

const database = knex({
  client: 'pg',
  connection: {
<<<<<<< HEAD
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
=======
    host: '172.16.0.4',
    // host: '127.0.0.1',
    user: 'mnb',
    password: 'thisis',
    database: 'td',
>>>>>>> 679c487338fa2e8af12df229ef7b861c81ca2ce9
  },
})

// export default database

const testIns = async () => {
  const ins = await database('tt').insert({ test_column: 'TEST' })
<<<<<<< HEAD
  // console.log(ins)
=======
  console.log(ins)
  return
>>>>>>> 679c487338fa2e8af12df229ef7b861c81ca2ce9
}

const kek = async () => {
  const res = await database.select('user_first_name').from('users_old').where({id: 1})
  console.log(res)
}

kek()

// testIns()

// database.migrate.latest()
