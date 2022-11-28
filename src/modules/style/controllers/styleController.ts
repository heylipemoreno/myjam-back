import express from 'express';
import constants from '../../../config/constants/constants';
import createStyleUseCase from '../usecases/createStyleUseCase';
import deleteStyleUseCase from '../usecases/deleteStyleUseCase';
import listIDStyleUseCase from '../usecases/listIDStyleUseCase';
import listStyleUseCase from '../usecases/listStyleUseCase';
import updateStyleUseCase from '../usecases/updateStyleUseCase';

export class StyleController {
    async create(request: express.Request, response: express.Response) {
        try {
            const style = createStyleUseCase.execute(request.body);
            response.status(201).send(style);
        } catch (error) {
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = listStyleUseCase.execute();
            response.status(200).send(list);
        } catch (error) {
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const style = listIDStyleUseCase.execute(Number(request.params.id));
            if (!style) {
                response.status(404).send(constants.CRUD.STYLE.NOT_FOUND)
            }
            response.status(200).send(style);
        } catch (error) {
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = updateStyleUseCase.execute(request.body, Number(request.params.id))
            if (!updated) {
                response.status(404).send(constants.CRUD.STYLE.NOT_FOUND)
            }
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = deleteStyleUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new StyleController();