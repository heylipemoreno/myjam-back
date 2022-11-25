import express from 'express'
import constants from '../../../config/constants/constants';
import createLessonsUseCase from '../usecases/createLessonsUseCase'
import deleteLessonsUseCase from '../usecases/deleteLessonsUseCase';
import listIDLessonsUseCase from '../usecases/listIDLessonsUseCase';
import listLessonsUseCase from '../usecases/listLessonsUseCase';
import updateLessonsUseCase from '../usecases/updateLessonsUseCase';

export class LessonsController {
    async create(request: express.Request, response: express.Response) {
        try {
            const lesson = await createLessonsUseCase.execute(request.body)
            response.status(201).send(lesson)
        } catch (error) {
            console.log(error);
            response.status(500).json(constants.CRUD.ERROR);
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const listLessons = await listLessonsUseCase.execute()
            response.status(200).send(listLessons)
        } catch (error) {
            console.log(error);
            response.status(500).json(constants.CRUD.ERROR);
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const lesson = await listIDLessonsUseCase.execute(Number(request.params.id));
            response.status(200).send(lesson);
        } catch (error) {
            console.log(error);
            response.status(500).json(constants.CRUD.ERROR);
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateLessonsUseCase.execute(request.body, Number(request.params.id))
            response.status(200).send(updated)
        } catch (error) {
            console.log(error);
            response.status(500).json(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteLessonsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error);
            response.status(500).json(constants.CRUD.ERROR)
        }
    }
}

export default new LessonsController();