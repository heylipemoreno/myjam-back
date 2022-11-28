import express from 'express'
import constants from '../../../config/constants/constants'
import createUsersUseCase from '../usecases/createUsersUseCase'
import deleteUsersUsecase from '../usecases/deleteUsersUseCase'
import forgotPassUsersUseCase from '../usecases/forgotPassUsersUseCase'
import listChordsRelacionUseCase from '../usecases/listChordsRelacionUseCase'
import listIDUsersUsecase from '../usecases/listIDUsersUseCase'
import listLessonsRelacionUseCase from '../usecases/listLessonsRelacionUseCase'
import listQuestionsRelacionUseCase from '../usecases/listQuestionsRelacionUseCase'
import listSongsRelacionUseCase from '../usecases/listSongsRelacionUseCase'
import listUsersUsecase from '../usecases/listUsersUseCase'
import loginUsersUseCase from '../usecases/loginUsersUseCase'
import recoverPassUsersUseCase from '../usecases/recoverPassUsersUseCase'
import updateUsersUseCase from '../usecases/updateUsersUseCase'

export class UsersController {
    async create(request: express.Request, response: express.Response) {
        try {
            const user = await createUsersUseCase.execute(request.body)
            response.status(201).send(user)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = await listUsersUsecase.execute();
            response.status(200).json(list);
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const user = await listIDUsersUsecase.execute(Number(request.params.id))
            response.status(200).send(user)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateUsersUseCase.execute(request.body, Number(request.params.id))
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteUsersUsecase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async login(request: express.Request, response: express.Response) {
        try {
            const login = await loginUsersUseCase.execute(request.body)
            response.status(200).send(login)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async forgotPass(request: express.Request, response: express.Response) {
        try {
            const forgotPass = await forgotPassUsersUseCase.execute(request.body)
            return forgotPass
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async recoverPass(request: express.Request, response: express.Response) {
        try {
            const recoverPass = await recoverPassUsersUseCase.execute(request.body, request.body.info.id)
            return recoverPass
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async getByToken(request: express.Request, response: express.Response) {
        try {
            const { id } = request.body.info
            response.status(200).send({ UserID: id })
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async chordsRelacion(request: express.Request, response: express.Response) {
        try {
            const list = await listChordsRelacionUseCase.execute(Number(request.params.id))
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async lessonsRelacion(request: express.Request, response: express.Response) {
        try {
            const list = await listLessonsRelacionUseCase.execute(Number(request.params.id))
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async questionsRelacion(request: express.Request, response: express.Response) {
        try {
            const list = await listQuestionsRelacionUseCase.execute(Number(request.params.id))
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async songsRelacion(request: express.Request, response: express.Response) {
        try {
            const list = await listSongsRelacionUseCase.execute(Number(request.params.id))
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            return response.status(500).json(constants.CRUD.ERROR)
        }
    }
}

export default new UsersController();