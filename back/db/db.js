import knex from 'knex'

const database = knex({
  client: 'pg',
  connection: {
    host: '172.16.0.4',
    // host: '127.0.0.1',
    user: 'mnb',
    password: 'thisis',
    database: 'td',
  },
})

const testIns = async () => {
  const ins = await database('tt').insert({ test_column: 'TEST' })
  console.log(ins)
  return
}

const kek = async () => {
  const res = await database.select('user_first_name').from('users_old').where({id: 1})
  console.log(res)
}

kek()

// testIns()

// database.migrate.latest()
