/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id'),
    table.integer('user_id').notNullable()
    table.string('login').notNullable()
    table.string('pass')
    table.string('first_name')
    table.string('second_name')
    table.string('last_name')
    table.integer('supervisor_id')
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
