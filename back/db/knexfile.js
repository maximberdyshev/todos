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
