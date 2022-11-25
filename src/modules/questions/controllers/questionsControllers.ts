import express from 'express';
import constants from '../../../config/constants/constants';
import createQuestionsUseCase from '../usecases/createQuestionsUseCase';
import deleteQuestionsUseCase from '../usecases/deleteQuestionsUseCase';
import listIDQuestionsUseCase from '../usecases/listIDQuestionsUseCase';
import listQuestionsUseCase from '../usecases/listQuestionsUseCase';
import updateQuestionsUseCase from '../usecases/updateQuestionsUseCase';

export class QuestionsController {
    async create(request: express.Request, response: express.Response) {
        try {
            const question = createQuestionsUseCase.execute(request.body)
            response.status(201).send(question)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = listQuestionsUseCase.execute();
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const question = listIDQuestionsUseCase.execute(Number(request.params.id))
            response.status(200).send(question)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = updateQuestionsUseCase.execute(request.body, Number(request.params.id))
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = deleteQuestionsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new QuestionsController();