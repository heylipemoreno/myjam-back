import { request, Request, Response } from "express";
import { QuestionsRepository } from "../repositories/QuestionsRepository";

export class QuestionsController {
    async create(req: Request, res: Response) {
        const { questionContent } = req.body;
        if (!questionContent) {
            return res.status(400).send({ message: 'O conteúdo da questão é obrigatório!' })
        }
        try {
            const newQuestion = QuestionsRepository.create({ questionContent });
            await QuestionsRepository.save(newQuestion);
            res.status(201).send(newQuestion);
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: 'Houve um problema ao tentar criar uma nova questão.' })
        }
    }
    async list(req: Request, res: Response) {
        try {
            const questions = await QuestionsRepository.find();
            res.status(200).send(questions);
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: 'Houve um problema ao tentar criar uma nova questão.' })
        }
    }
    async listOne(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const question = await QuestionsRepository.findOneBy({ id: Number(id) });
            if (!question) {
                return res.status(404).send({ message: `Não foi encontrado nenhuma questão com o ID:${id}` });
            }
            res.status(200).send(question);
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: 'Houve um problema ao tentar criar uma nova questão.' })
        }
    }
    async update(req: Request, res: Response) {
        const { questionContent } = req.body
        const { id } = req.params
        try {
            const question = await QuestionsRepository.findOneBy({ id: Number(id) });
            if (!question) {
                return res.status(404).send({ message: `Não foi encontrado nenhuma questão com o ID:${id}` })
            }
            await QuestionsRepository.update(id, {
                questionContent
            })
            res.status(200).send({ message: `Questão atalizada com sucesso!`, conteudo: questionContent });
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: 'Houve um problema ao tentar criar uma nova questão.' })
        }
    }
    async delete(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const question = await QuestionsRepository.delete({ id: Number(id) });
            res.status(204).send();
        } catch (error) {
            console.log(error)
            return res.status(500).send({ error: 'Houve um problema ao tentar criar uma nova questão.' })
        }
    }
}