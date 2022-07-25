/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const up = function (knex) {
  return knex.schema.createTable('todos', function (table) {
    table.increments('id')
    table.string('title').notNullable()
    table.string('body')
    table.string('date_end')
    table.string('date_create')
    table.string('date_update')
    table.string('priority')
    table.boolean('completed')
    table.integer('initiator')
    table.integer('executor')
    table.timestamps
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const down = function (knex) {
  return knex.schema.dropTable('todos')
}

export { up, down }
