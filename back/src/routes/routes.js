import { Router } from 'express'
import todosRouter from './todosRouter.js'
import userRouter from './userRouter.js'

const router = new Router()

router.use('/users', userRouter)
router.use('/todos', todosRouter)

export default router
