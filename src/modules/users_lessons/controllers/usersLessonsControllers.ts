import express from 'express'
import constants from '../../../config/constants/constants'
import createUsersLessonsUseCase from '../usecases/createUsersLessonsUseCase'
import deleteUsersLessonsUseCase from '../usecases/deleteUsersLessonsUseCase'
import listIDUsersLessonsUseCase from '../usecases/listIDUsersLessonsUseCase'
import listUsersLessonsUseCase from '../usecases/listUsersLessonsUseCase'
import updateUsersLessonsUseCase from '../usecases/updateUsersLessonsUseCase'

export class UsersLessonsController {
    async create(request: express.Request, response: express.Response) {
        try {
            const created = await createUsersLessonsUseCase.execute(request.body, Number(request.body.info.id))
            response.status(201).send(created)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = await listUsersLessonsUseCase.execute()
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const list = await listIDUsersLessonsUseCase.execute(Number(request.params.id))
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateUsersLessonsUseCase.execute(Number(request.params.id), request.body.info.id)
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteUsersLessonsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new UsersLessonsController();