import express from 'express'
import constants from '../../../config/constants/constants'
import createUsersUseCase from '../usecases/createUsersUsecase'
import deleteUsersUsecase from '../usecases/deleteUsersUsecase'
import listIDUsersUsecase from '../usecases/listIDUsersUsecase'
import listUsersUsecase from '../usecases/listUsersUsecase'
import updateUsersUsecase from '../usecases/updateUsersUsecase'

export class UsersController {
    async create(request: express.Request, response: express.Response) {
        try {
            const user = createUsersUseCase.execute(request.body)
            response.status(201).send(user)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = listUsersUsecase.execute();
            response.status(200).json(list);
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const user = listIDUsersUsecase.execute(Number(request.params.id))
            response.status(200).send(user)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = updateUsersUsecase.execute(request.body,Number(request.params.id))
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = deleteUsersUsecase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }
}

export default new UsersController();