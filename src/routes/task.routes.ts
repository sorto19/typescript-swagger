import {Router} from 'express'
import { getTask } from '../controlllers/task.controllers'
const router = Router()

router.get('/tasks', getTask)
router.get('/tasks/count', getTask)
router.post('/tasks', getTask)
router.get('/tasks/:id', getTask)
router.delete('/tasks/:id', getTask)
router.put('/tasks/:id', getTask)

export default router