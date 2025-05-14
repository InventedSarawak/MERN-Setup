// backend/src/tests/app.test.ts
import request from 'supertest'

import app from '../app'

describe('GET /api', () => {
    it('should return 200 OK', async () => {
        const res = await request(app).get('/api')
        expect(res.status).toBe(200)
        expect(res.body).toEqual({ status: 'ok' })
    })
})
