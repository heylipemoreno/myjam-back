import{Request,Response}from 'express';
import{LessonsRepository}from '../repositories/LessonsRepository';

export class LessonsController{
    async create(req:Request,res:Response){
        const{classesId,points}=req.body;

        if(!classesId && !points){
            return res.status(400).json({message:'Campos obrigatórios!'});
        }

        try{
            const newLesson=LessonsRepository.create({classesId,points});
            await LessonsRepository.save(newLesson);
            return res.status(201).json(newLesson);
        }catch(error){
            console.log(error);
            return res.status(500).json({message:'Algo deu errado.'});
        }
    }

    async list(req:Request,res:Response){
        try{
            const lessons=await LessonsRepository.find();
            res.status(200).json(lessons);
        }catch(error){
            console.log(error);
            return res.status(500).json({message:'Algo deu errado.'});
        }
    }

    async listOne(req:Request,res:Response){
        const{id}=req.params;
        try{
            const lesson=await LessonsRepository.findOneBy({id:Number(id)});

            if(!lesson){
                return res.status(404).json({message:'A lição não exisste.'});
            }else{
                res.status(200).json(lesson);
            }   
        }catch(error){
            console.log(error);
            return res.status(500).json({message:'A lição não existe.'});
        }
    }

    async update(req:Request,res:Response){
        const{classesId,usersId,points}=req.body;
        const{id}=req.params;

        try{
            const lesson=await LessonsRepository.findOneBy({id:Number(id)});

            if(!lesson){
                return res.status(404).json({message:'A lição não existe.'});
            }else{
                await LessonsRepository.update(id,{
                    classesId,
                    points
                });

                res.status(200).json({message:'Lições atualizadas com sucesso'});
            }
        }catch(error){
            console.log(error);
            return res.status(500).json({message:'Algo deu errado'});
        }
    }
    

    async delete(req:Request,res:Response){
        const{id}=req.params;
        try{
            const lessons=await LessonsRepository.delete({id:Number(id)});
            res.status(204).json();
        }catch(error){
            console.log(error);
            return res.status(500).json({error:'Algo deu errado.'});
        }
    }
}
