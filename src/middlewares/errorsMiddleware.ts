import express from 'express'

export default (error: express.ErrorRequestHandler, request: express.Request, response: express.Response, next: express.NextFunction) => {
    if (error.name === 'UnauthorizedError') {
        response.status(401).send({ error: 'Token inválido ou ausente!' });
    }

    if (error.name === 'ValidationError') {
        response.status(400).send({ error: 'Todos os campos são obrigatórios' })
    }
}