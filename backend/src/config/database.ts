import mongoose from 'mongoose'

import { DB_NAME } from '../constants'

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI
        if (!mongoUri) throw new Error('MONGODB_URI is not defined in the environment variables')
        const connectionInstance = await mongoose.connect(`${mongoUri}/${DB_NAME}`)
        console.log(`\nMongoDB Connected! \nDB Host: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.error('MONGODB connection error: ', (error as Error).message)
        process.exit(1)
    }
}

export default connectDB
