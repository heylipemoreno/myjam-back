import { Request, Response } from "express";
import constants from "../config/constants/constants";
import { QuestionsRepository } from "../repositories/QuestionsRepository";
import { QuestionsToModel } from "../services/helpers/QuestionsToModel";

export class QuestionsController {
    async create(req: Request, res: Response) {
        const { questionTitle, questionImageLink, questionContent, questionOptions, questionOptionCorrect, questionTemplate, isExplanation, lessonsId, songsId } = req.body;
        try {
            const newQuestion = QuestionsRepository.create({ questionTitle, questionImageLink, questionContent, questionOptions, questionOptionCorrect, questionTemplate, isExplanation, lessonsId, songsId });
            await QuestionsRepository.save(newQuestion);
            res.status(201).send(QuestionsToModel(newQuestion));
        } catch (error) {
            console.log(error)
            return res.status(500).send(constants.CRUD.ERROR)
        }
    }

    async list(req: Request, res: Response) {
        try {
            const questions = await QuestionsRepository.find();
            const listQuestions = questions.map(QuestionsToModel)
            res.status(200).send(listQuestions);
        } catch (error) {
            console.log(error)
            return res.status(500).send(constants.CRUD.ERROR)
        }
    }

    async listOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const question = await QuestionsRepository.findOneBy({ id: Number(id) });
            if (!question) {
                return res.status(404).send(constants.CRUD.QUESTIONS.NOT_FOUND);
            }
            res.status(200).send(QuestionsToModel(question));
        } catch (error) {
            console.log(error)
            return res.status(500).send(constants.CRUD.ERROR)
        }
    }

    async update(req: Request, res: Response) {
        const { questionTitle, questionImageLink, questionContent, questionOptions, questionOptionCorrect, questionTemplate, isExplanation, lessonsId, songsId } = req.body
        const { id } = req.params
        try {
            const question = await QuestionsRepository.findOneBy({ id: Number(id) });
            if (!question) {
                return res.status(404).send(constants.CRUD.QUESTIONS.NOT_FOUND)
            }
            await QuestionsRepository.update(id, {
                questionTitle, 
                questionImageLink, 
                questionContent, 
                questionOptions, 
                questionOptionCorrect, 
                questionTemplate, 
                isExplanation, 
                lessonsId, 
                songsId
            })
            res.status(200).send({ message: constants.CRUD.QUESTIONS.UPDATE, conteudo: questionContent });
        } catch (error) {
            console.log(error)
            return res.status(500).send(constants.CRUD.ERROR)
        }
    }
    
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const question = await QuestionsRepository.delete({ id: Number(id) });
            res.status(204).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send(constants.CRUD.ERROR)
        }
    }
}