import { Router } from 'express'

const router = Router()

/**
 * @swagger
 * /api:
 *   get:
 *     tags:
 *       - Test
 *     summary: Test endpoint
 *     description: Returns a test message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.get('/', (req, res) => {
    res.status(200).json({ status: 'ok' })
})

/**
 * @swagger
 * /api/test:
 *   get:
 *     tags:
 *       - Test
 *     summary: Test endpoint
 *     description: Returns a test message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.get('/test', (req, res) => {
    res.send('Hello Test')
})

/**
 * @swagger
 * /api/test:
 *   post:
 *     tags:
 *       - Test
 *     summary: Test endpoint
 *     description: Returns a test message
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */

router.post('/test', (req, res) => {
    const body: string = req.body
    res.send(`'Hello Test' ${body}`)
})

export default router
