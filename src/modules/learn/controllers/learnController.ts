import express from 'express';
import constants from '../../../config/constants/constants';
import createLearnUseCase from '../usecases/createLearnUseCase';
import deleteLearnUseCase from '../usecases/deleteLearnUseCase';
import listIDLearnUseCase from '../usecases/listIDLearnUseCase';
import listLearnUseCase from '../usecases/listLearnUseCase';
import updateLearnUseCase from '../usecases/updateLearnUseCase';

export class LearnController{
    async create(request:express.Request,response:express.Response){
        try{
            const learn=createLearnUseCase.execute(request.body);
            response.status(201).send(learn);
        } catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async list(request:express.Request,response:express.Response){
        try{
            const list=listLearnUseCase.execute();
            response.status(200).send(list);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async listID(request:express.Request,response:express.Response){
        try{
            const learn=listIDLearnUseCase.execute(Number(request.params.id));
            if(!learn){
                response.status(404).send(constants.CRUD.LEARN.NOT_FOUND)
            }
            response.status(200).send(learn);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async update(request:express.Request,response:express.Response){
        try{
            const updated=updateLearnUseCase.execute(request.body,Number(request.params.id))
            if(!updated){
                response.status(404).send(constants.CRUD.LEARN.NOT_FOUND)
            }
            response.status(200).send(updated)
        }catch(error){
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request:express.Request,response:express.Response){
        try{
            const deleted=deleteLearnUseCase.execute(Number(request.params.id))
            response.status(204).send()
        }catch(error){
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new LearnController();