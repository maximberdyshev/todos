import { Router } from 'express'
import UserController from '../controllers/UserController.js'

const router = new Router()

// тест
router.get('/', UserController.getThis)

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/check', UserController.check)

export default router
