import type { Request, Response, NextFunction, RequestHandler } from 'express'

const asyncHandler = (requestHandler: RequestHandler) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await requestHandler(req, res, next)
        } catch (error) {
            const errorCode = (error as any)?.code || 500
            const statusCode = isValidHttpStatusCode(errorCode) ? errorCode : 500
            const message = (error as Error)?.message || 'Internal Server Error'

            res.status(statusCode).json({
                success: false,
                message
            })
        }
    }
}

function isValidHttpStatusCode(code: number): boolean {
    return Number.isInteger(code) && code >= 100 && code < 600
}

export { asyncHandler }
