module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'td',
      user: 'mnb',
      password: 'thisis',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
}
