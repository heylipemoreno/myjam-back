import express from 'express'
import constants from '../../../config/constants/constants'
import createUsersQuestionsUseCase from '../usecases/createUsersQuestionsUseCase'
import deleteUsersQuestionsUseCase from '../usecases/deleteUsersQuestionsUseCase'
import listIDUsersQuestionsUseCase from '../usecases/listIDUsersQuestionsUseCase'
import listUsersQuestionsUseCase from '../usecases/listUsersQuestionsUseCase'
import updateUsersQuestionsUseCase from '../usecases/updateUsersQuestionsUseCase'

export class UsersQuestionsController {
    async create(request: express.Request, response: express.Response) {
        try {
            const created = await createUsersQuestionsUseCase.execute(request.body, Number(request.params.id))
            response.status(201).send(created)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = await listUsersQuestionsUseCase.execute()
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const listID = await listIDUsersQuestionsUseCase.execute(Number(request.params.id))
            response.status(200).send(listID)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateUsersQuestionsUseCase.execute(request.body, Number(request.params.id))
            if(!updated){
                response.status(404).send(constants.CRUD.USERS_QUESTIONS.NOT_FOUND)
            }
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteUsersQuestionsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new UsersQuestionsController();