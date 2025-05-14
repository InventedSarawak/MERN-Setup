import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import { swaggerUi, swaggerSpec } from './config/swagger.config'
import testRoutes from './routes/test.routes'

const app = express()

app.use(express.json())
app.use(cors({ origin: process.env.CORS_ORIGIN, credentials: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.get('/', (req, res) => {
    res.send('Hello Backend.\nThe APIs are defined at /api route.\nAccess the docs at /api-docs')
})

app.use('/api', testRoutes)

export default app
