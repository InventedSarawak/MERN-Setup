import path from 'path'
import { fileURLToPath } from 'url'

import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Backend APIs',
            version: '2.0.0',
            description: 'API Routes'
        },
        tags: [
            {
                name: 'Test',
                description: 'Testing endpoints'
            }
        ],
        servers: [
            {
                url: `http://localhost:${process.env.PORT || 5000}`
            }
        ]
    },
    apis: [path.join(__dirname, '../routes/*.ts'), path.join(__dirname, '../routes/*.js')]
}

const swaggerSpec = swaggerJsdoc(options)

export { swaggerUi, swaggerSpec }
