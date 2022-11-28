import express from 'express'
import constants from '../../../config/constants/constants'
import createSongsChordsUseCase from '../usecases/createSongsChordsUseCase'
import deleteSongsChordsUseCase from '../usecases/deleteSongsChordsUseCase'
import listIDSongsChordsUseCase from '../usecases/listIDSongsChordsUseCase'
import listSongsChordsUseCase from '../usecases/listSongsChordsUseCase'
import updateSongsChordsUseCase from '../usecases/updateSongsChordsUseCase'

export class SongsChordsController{
    async create(request:express.Request,response:express.Response){
        try {
            const created=await createSongsChordsUseCase.execute(request.body,Number(request.body.info.id))
            response.status(201).send(created)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(request:express.Request,response:express.Response) {
        try {
            const list=await listSongsChordsUseCase.execute()
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listID(request: express.Request, response: express.Response) {
        try {
            const list = await listIDSongsChordsUseCase.execute(Number(request.params.id))
            response.status(200).send(list)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(request: express.Request, response: express.Response) {
        try {
            const updated = await updateSongsChordsUseCase.execute(Number(request.params.id), request.body.info.id)
            if(!updated){
                response.status(404).send(constants.CRUD.SONGS_CHORDS.NOT_FOUND)
            }
            response.status(200).send(updated)
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request: express.Request, response: express.Response) {
        try {
            const deleted = await deleteSongsChordsUseCase.execute(Number(request.params.id))
            response.status(204).send()
        } catch (error) {
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new SongsChordsController();