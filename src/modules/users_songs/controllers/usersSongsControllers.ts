import express from 'express'
import constants from '../../../config/constants/constants'
import createUsersSongsUseCase from '../usecases/createUsersSongsUseCase'
import deleteUsersSongsUseCase from '../usecases/deleteUsersSongsUseCase'
import listIDUsersSongsUseCase from '../usecases/listIDUsersSongsUseCase'
import listUsersSongsUseCase from '../usecases/listUsersSongsUseCase'
import updateUsersSongsUseCase from '../usecases/updateUsersSongsUseCase'

export class UsersSongsControllers {
    async create(request: express.Request, response: express.Response) {
        try {
            const relacion = await createUsersSongsUseCase.execute(request.body, Number(request.body.info.id))
            response.status(201).send(relacion)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = await listUsersSongsUseCase.execute()
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const relacion = await listIDUsersSongsUseCase.execute(Number(request.params.id))
            response.status(200).send(relacion)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateUsersSongsUseCase.execute(Number(request.params.id), request.body.info.id)
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteUsersSongsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new UsersSongsControllers()