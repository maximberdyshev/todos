/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id'),
    table.integer('user_id')
    table.string('login').notNullable()
    table.string('email')
    table.timestamps
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const down = function (knex) {
  return knex.schema.dropTable('users')
}

export { up, down }
