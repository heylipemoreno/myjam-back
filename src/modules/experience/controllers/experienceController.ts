import express from 'express';
import constants from '../../../config/constants/constants';
import createExperienceUseCase from '../usecases/createExperienceUseCase';
import deleteExperienceUseCase from '../usecases/deleteExperienceUseCase';
import listIDExperienceUseCase from '../usecases/listIDExperienceUseCase';
import listExperienceUseCase from '../usecases/listExperienceUseCase';
import updateExperienceUseCase from '../usecases/updateExperienceUseCase';

export class ExperienceController{
    async create(request:express.Request,response:express.Response){
        try{
            const experience=createExperienceUseCase.execute(request.body);
            response.status(201).send(experience);
        } catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async list(request:express.Request,response:express.Response){
        try{
            const list=listExperienceUseCase.execute();
            response.status(200).send(list);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async listID(request:express.Request,response:express.Response){
        try{
            const experience=listIDExperienceUseCase.execute(Number(request.params.id));
            response.status(200).send(experience);
        }catch(error){
            console.log(error);
            response.status(500).send(constants.CRUD.ERROR);
        }
    }

    async update(request:express.Request,response:express.Response){
        try{
            const updated=updateExperienceUseCase.execute(request.body,Number(request.params.id))
            response.status(200).send(updated)
        }catch(error){
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }

    async delete(request:express.Request,response:express.Response){
        try{
            const deleted=deleteExperienceUseCase.execute(Number(request.params.id))
            response.status(204).send()
        }catch(error){
            console.log(error)
            response.status(500).send(constants.CRUD.ERROR)
        }
    }
}

export default new ExperienceController();