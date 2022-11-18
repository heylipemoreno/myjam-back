import express from 'express'
import cors from 'cors'
import { AppDataSource } from './data-source'
import routes from './routes'
import errorsMiddleware from './middlewares/errorsMiddleware'

const port = process.env.PORT || 8000

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())
    app.use(cors())
    app.use(routes)
    app.use(errorsMiddleware)

    app.get('/', (request: express.Request, response: express.Response) => {
        return response.status(200).send('API funcionando corretamente.')
    })

    console.log('Status: OK [iniciado]')

    return app.listen(port)
})
