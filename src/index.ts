import express from 'express'
import cors from 'cors'
import { AppDataSource } from './data-source'
import routes from './routes'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(cors())

    app.use(routes)

    app.get('/', (request: express.Request, response: express.Response) => {
        return response.status(200).send('API funcionando corretamente.')
    })

    console.log('Status: OK [iniciado]')

    return app.listen(process.env.PORT)
})