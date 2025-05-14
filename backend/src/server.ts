import dotenv from 'dotenv'

import connectDB from './config/database.config'
import app from './app'

dotenv.config({ path: '../.env' })

const PORT = process.env.PORT || 5000

try {
    await connectDB()
} catch (err) {
    console.error('MongoDB connection failed!!', err)
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
    console.log(`API docs http://localhost:${PORT}/api-docs`)
})
