/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const seed = async function (knex) {
  return knex('todos')
    .del()
    .then(() => {
      return knex('todos').insert([
        {
          id: 1,
          title: 'Заголовок задачи 1',
          body: 'Описание задачи 1',
          date_end: '2022-10-10',
          date_create: '2022-01-01',
          date_update: '2022-05-05',
          priority: 'средний',
          completed: false,
          initiator: 1,
          executor: 1,
        },
        {
          id: 2,
          title: 'Заголовок задачи 2',
          body: 'Описание задачи 2',
          date_end: '2022-07-01',
          date_create: '2022-01-22',
          date_update: '2022-05-13',
          priority: 'средний',
          completed: false,
          initiator: 2,
          executor: 2,
        },
        {
          id: 3,
          title: 'Заголовок задачи 3',
          body: 'Описание задачи 3',
          date_end: '2022-08-01',
          date_create: '2022-01-11',
          date_update: '2022-04-13',
          priority: 'средний',
          completed: false,
          initiator: 3,
          executor: 1,
        },
        {
          id: 4,
          title: 'Заголовок задачи 4',
          body: 'Описание задачи 4',
          date_end: '2022-08-01',
          date_create: '2022-01-11',
          date_update: '2022-04-13',
          priority: 'средний',
          completed: false,
          initiator: 3,
          executor: 2,
        },
      ])
    })
}

export { seed }
