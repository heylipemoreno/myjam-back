import express from 'express'
import constants from '../../../config/constants/constants'
import createGenresUseCase from '../usecases/createGenresUseCase'
import deleteGenresUseCase from '../usecases/deleteGenresUseCase'
import listGenresUseCase from '../usecases/listGenresUseCase'
import listIDGenresUseCase from '../usecases/listIDGenresUseCase'
import updateGenresUseCase from '../usecases/updateGenresUseCase'

export class GenresControllers {
    async create(request: express.Request, response: express.Response) {
        try {
            const genre = await createGenresUseCase.execute(request.body)
            response.status(201).send(genre)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = await listGenresUseCase.execute()
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const list = await listIDGenresUseCase.execute(Number(request.params.id))
            if(!list){
                response.status(404).send(constants.CRUD.GENRES.NOT_FOUND)
            }
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateGenresUseCase.execute(request.body, Number(request.params.id))
            if(!updated){
                response.status(404).send(constants.CRUD.GENRES.NOT_FOUND)
            }
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteGenresUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new GenresControllers()