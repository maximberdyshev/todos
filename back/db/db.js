import knex from 'knex'

const database = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'mnb',
    password: 'thisis',
    database: 'td',
  },
})

const testIns = async () => {
    const ins = await database('tt').insert({ test_column: 'TEST'})
    // console.log(ins)
}

testIns()

// database.migrate.latest()
