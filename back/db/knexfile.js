<<<<<<< HEAD
import dotenv from 'dotenv'

// ????? Question ?????
// в таком формате работают migrations и seeds, но работа с базой невозможна
// dotenv.config({path: '../.env'})
// а вот в таком формате уже можно работать с базой
dotenv.config()

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const knexfile = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  // staging: {
  // },

  // production: {
  // }
}

export default knexfile
=======
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
>>>>>>> 679c487338fa2e8af12df229ef7b861c81ca2ce9
