import express from 'express';
import constants from '../../../config/constants/constants';
import createPracticeUseCase from '../usecases/createPracticeUseCase';
import deletePracticeUseCase from '../usecases/deletePracticeUseCase';
import listIDPracticeUseCase from '../usecases/listIDPracticeUseCase';
import listPracticeUseCase from '../usecases/listPracticeUseCase';
import updatePracticeUseCase from '../usecases/updatePracticeUseCase';

export class PracticeController{
    async create(request:express.Request,response:express.Response){
        try{
            const practice=createPracticeUseCase.execute(request.body);
            response.status(201).send(practice);
        } catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async list(request:express.Request,response:express.Response){
        try{
            const list=listPracticeUseCase.execute();
            response.status(200).send(list);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async listID(request:express.Request,response:express.Response){
        try{
            const practice=listIDPracticeUseCase.execute(Number(request.params.id));
            if(!practice){
                response.status(404).send(constants.CRUD.PRACTICE.NOT_FOUND)
            }
            response.status(200).send(practice);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async update(request:express.Request,response:express.Response){
        try{
            const updated=updatePracticeUseCase.execute(request.body,Number(request.params.id))
            if(!updated){
                response.status(404).send(constants.CRUD.PRACTICE.NOT_FOUND)
            }
            response.status(200).send(updated)
        }catch(error){
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request:express.Request,response:express.Response){
        try{
            const deleted=deletePracticeUseCase.execute(Number(request.params.id))
            response.status(204).send()
        }catch(error){
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new PracticeController();