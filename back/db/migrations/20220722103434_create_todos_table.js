/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
up = function (knex) {
  return knex.schema.createTable('todos', function (table) {
    table.increments('id')
    table.string('title', 255).notNullable()
    table.string('body', 255)
    table.string('date_end', 255)
    table.string('date_create', 255)
    table.string('date_update', 255)
    table.string('priority', 255)
    table.string('completed', Boolean)
    table.string('initiator', 255)
    table.string('executor', 255)
    table.timestamps
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
down = function (knex) {
  return knex.schema.dropTable('todos')
}

export { up, down }
