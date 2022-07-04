import knexfile from './knexfile.js'

const knex = knexfile.development

let param = knex('posts').select('*')

console.log(param)
