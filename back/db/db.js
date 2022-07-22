import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config({path: '../.env'})

const database = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },
})

// export default database

const testIns = async () => {
  const ins = await database('tt').insert({ test_column: 'TEST' })
  // console.log(ins)
}

testIns()

// database.migrate.latest()
