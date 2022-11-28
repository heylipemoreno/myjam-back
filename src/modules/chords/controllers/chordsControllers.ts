import express from 'express'
import constants from '../../../config/constants/constants'
import createChordsUseCase from '../usecases/createChordsUseCase'
import deleteChordsUseCase from '../usecases/deleteChordsUseCase'
import listChordsUseCase from '../usecases/listChordsUseCase'
import listIDChordUseCase from '../usecases/listIDChordUseCase'
import updateChordsUseCase from '../usecases/updateChordsUseCase'

export class ChordsController {
    async create(request: express.Request, response: express.Response) {
        try {
            const chord = await createChordsUseCase.execute(request.body)
            response.status(201).send(chord)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request: express.Request, response: express.Response) {
        try {
            const list = await listChordsUseCase.execute()
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const chord = await listIDChordUseCase.execute(Number(request.params.id))
            if(!chord){
                response.status(404).send(constants.CRUD.CHORDS.NOT_FOUND)
            }
            response.status(200).send(chord)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateChordsUseCase.execute(request.body, Number(request.params.id))
            if(!updated){
                response.status(404).send(constants.CRUD.CHORDS.NOT_FOUND)
            }
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteChordsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new ChordsController();