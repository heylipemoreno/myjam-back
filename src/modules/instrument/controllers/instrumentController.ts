import express from 'express';
import constants from '../../../config/constants/constants';
import createInstrumentUseCase from '../usecases/createInstrumentUseCase';
import deleteInstrumentUseCase from '../usecases/deleteInstrumentUseCase';
import listIDInstrumentUseCase from '../usecases/listIDInstrumentUseCase';
import listInstrumentUseCase from '../usecases/listInstrumentUseCase';
import updateInstrumentUseCase from '../usecases/updateInstrumentUseCase';

export class InstrumentController {
    async create(request: express.Request, response: express.Response) {
        try {
            const instrument = createInstrumentUseCase.execute(request.body);
            response.status(201).send(instrument);
        } catch (error) {
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = listInstrumentUseCase.execute();
            response.status(200).send(list);
        } catch (error) {
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const instrument = listIDInstrumentUseCase.execute(Number(request.params.id));
            response.status(200).send(instrument);
        } catch (error) {
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = updateInstrumentUseCase.execute(request.body, Number(request.params.id))
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = deleteInstrumentUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new InstrumentController();