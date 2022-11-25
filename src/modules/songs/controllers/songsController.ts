import express from 'express'
import constants from '../../../config/constants/constants';
import createSongsUseCase from '../usecases/createSongsUseCase'
import deleteSongsUseCase from '../usecases/deleteSongsUseCase';
import listIDSongsUseCase from '../usecases/listIDSongsUseCase';
import listSongsUseCase from '../usecases/listSongsUseCase';
import updateSongsUseCase from '../usecases/updateSongsUseCase';

export class SongsController {
    async create(request:express.Request,response:express.Response){
        try {
            const song = await createSongsUseCase.execute(request.body);
            response.status(201).send(song)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request:express.Request,response:express.Response){
        try {
            const list = await listSongsUseCase.execute()
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request:express.Request,response:express.Response){
        try {
            const song = listIDSongsUseCase.execute(Number(request.params.id))
            response.status(200).send(song)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request:express.Request,response:express.Response){
        try {
            const updated = updateSongsUseCase.execute(request.body,Number(request.params.id))
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request:express.Request,response:express.Response){
        try {
            const deleted = deleteSongsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new SongsController();