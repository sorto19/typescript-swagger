import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import taskRoutes from './routes/task.routes'

const app = express()

app.set('port',process.env.PORT || 3000)//nombre de variable port si no toma el port 3000
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(taskRoutes)


export default app