import { dirname } from 'path'

export default {
  development: {
    client: 'pg',
    connection: {
      host: '172.16.0.4',
      user: 'mnb',
      password: 'thisis',
      database: 'td',
    },
    pool: {
      min: 1,
      max: 5,
    },
    migrations: {
      directory: dirname('./migrations/migrations'),
    },
    seeds: {
      directory: dirname('./seeds/seeds'),
    },
  },
}
