import { Request, Response } from 'express';
import constants from '../config/constants/constants';
import { LessonsRepository } from '../repositories/LessonsRepository';
import { QuestionsRepository } from '../repositories/QuestionsRepository';

export class LessonsController {
    async create(req: Request, res: Response) {
        const { lessonName, lessonImageLink } = req.body;
        try {
            const newLesson = LessonsRepository.create({ lessonName, lessonImageLink });
            await LessonsRepository.save(newLesson);
            return res.status(201).json(newLesson);
        } catch (error) {
            console.log(error);
            return res.status(500).json(constants.CRUD.ERROR);
        }
    }

    async list(req: Request, res: Response) {
        try {
            const lessons = await LessonsRepository.find();
            res.status(200).json(lessons);
        } catch (error) {
            console.log(error);
            return res.status(500).json(constants.CRUD.ERROR);
        }
    }

    async listOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const lesson = await LessonsRepository.findOneBy({ id: Number(id) });
            if (!lesson) {
                return res.status(404).json(constants.CRUD.LESSONS.NOT_FOUND);
            } else {
                res.status(200).json(lesson);
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json(constants.CRUD.ERROR);
        }
    }

    async update(req: Request, res: Response) {
        const { lessonName, lessonImageLink } = req.body;
        const { id } = req.params;
        try {
            const lesson = await LessonsRepository.findOneBy({ id: Number(id) });
            if (!lesson) {
                return res.status(404).json(constants.CRUD.LESSONS.NOT_FOUND);
            } else {
                await LessonsRepository.update(id, {
                    lessonName,
                    lessonImageLink
                });
                res.status(200).json(constants.CRUD.LESSONS.UPDATE);
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json(constants.CRUD.ERROR);
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const lessons = await LessonsRepository.delete({ id: Number(id) });
            res.status(204).json();
        } catch (error) {
            console.log(error);
            return res.status(500).json(constants.CRUD.ERROR);
        }
    }

    async listWithQuestions(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const lesson = await LessonsRepository.findOneBy({ id: Number(id) });
            if (!lesson) {
                return res.status(404).json(constants.CRUD.LESSONS.NOT_FOUND);
            }
            const questions = await QuestionsRepository.find({
                where: {
                    lessonsId: Number(id)
                }
            })
            if (!questions) {
                res.status(404).send(constants.CRUD.LESSONS.QUESTIONS.NOT_FOUND)
            }
            res.status(200).send({
                Lesson: lesson,
                Questions: questions
            })
        } catch (error) {
            console.log(error);
            return res.status(500).json(constants.CRUD.ERROR);
        }
    }
}