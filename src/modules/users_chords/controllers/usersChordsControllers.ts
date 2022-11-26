import express from 'express'
import constants from '../../../config/constants/constants'
import createUsersChordsUseCase from '../usecases/createUsersChordsUseCase'
import deleteUsersChordsUseCase from '../usecases/deleteUsersChordsUseCase'
import listIDUsersChordsUseCase from '../usecases/listIDUsersChordsUseCase'
import listUsersChordsUseCase from '../usecases/listUsersChordsUseCase'
import updateUsersChordsUseCase from '../usecases/updateUsersChordsUseCase'

export class UsersChordsController{
    async create(request:express.Request,response:express.Response){
        try{
            const created=await createUsersChordsUseCase.execute(request.body, Number(request.body.info.id))
            response.status(201).send(created);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async list(request:express.Request,response:express.Response){
        try{
            const list=await listUsersChordsUseCase.execute()
            response.status(200).send(list);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async listID(request:express.Request,response:express.Response){
        try{
            const list=await listIDUsersChordsUseCase.execute(Number(request.params.id))
            response.status(200).send(list);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async update(request:express.Request,response:express.Response){
        try{
            const updated=await updateUsersChordsUseCase.execute(Number(request.params.id),request.body.info.id)
            response.status(200).send(updated);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async delete(request:express.Request,response:express.Response){
        try{
            const deleted=await deleteUsersChordsUseCase.execute(Number(request.params.id))
            response.status(204).send();
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }
}

export default new UsersChordsController();