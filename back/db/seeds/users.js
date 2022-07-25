/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const seed = async function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_id: 1,
          login: 'Smith',
          pass: '111',
          first_name: 'Smith',
          second_name: 'S',
          last_name: 'Patefon',
          supervisor_id: 3,
        },
        {
          id: 2,
          user_id: 2,
          login: 'Jhon',
          pass: '111',
          first_name: 'Jhon',
          second_name: 'X',
          last_name: 'Lametron',
          supervisor_id: 3,
        },
        {
          id: 3,
          user_id: 3,
          login: 'Bobby',
          pass: '111',
          first_name: 'Bobby',
          second_name: 'F',
          last_name: 'Megatron',
          supervisor_id: 3,
        },
      ])
    })
}

export { seed }
