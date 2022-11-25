import express from 'express'
import cors from 'cors'
import { AppDataSource } from './data-source'
import routes from './routes'
import errorsMiddleware from './middlewares/errorsMiddleware'
import constants from './config/constants/constants'
import port from './config/api/port'

AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())
    app.use(cors())
    app.use(routes)
    app.use(errorsMiddleware)

    //Trocar depois para nova estrutura
    app.get('/', (request: express.Request, response: express.Response) => {
        return response.status(200).send(`API working correctly [Running in Port:${port}]`)
    })

    return app.listen(port, () => {
        console.log(constants.APP.MESSAGES.STATUS.OK)
    })
})
