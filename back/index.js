import express from 'express'
import cors from 'cors'


const app = express()
const port = 3001

const sent = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
]

app.use(cors())
app.use(express.json())


app.get('/api/getall', (req, res) => {
  res.json(sent)
})

app.listen(port, () => {
  console.log('server started')
})
