import express from 'express'
import constants from '../../../config/constants/constants'
import createGenresSongsUseCase from '../usecases/createGenresSongsUseCase'
import deleteGenresSongsUseCase from '../usecases/deleteGenresSongsUseCase'
import listIDGenresSongsUseCase from '../usecases/listIDGenresSongsUseCase'
import listGenresSongsUseCase from '../usecases/listGenresSongsUseCase'
import updateGenresSongsUseCase from '../usecases/updateGenresSongsUseCase'

export class GenresSongsController {
    async create(request: express.Request, response: express.Response) {
        try {
            const created = await createGenresSongsUseCase.execute(request.body, Number(request.params.id))
            response.status(201).send(created)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = await listGenresSongsUseCase.execute()
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const list = await listIDGenresSongsUseCase.execute(Number(request.params.id))
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateGenresSongsUseCase.execute(request.body, Number(request.params.id))
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteGenresSongsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new GenresSongsController();