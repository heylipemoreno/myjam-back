import { Request, Response } from "express";
import { levelsRepository } from "../repositories/levels-repository";

export class LevelsController {
    async create(req: Request, res: Response) {
        const { levelId, levelPoints, totalPoints } = req.body

        if (!levelId || !levelPoints || !totalPoints) {
            return res.status(400).json({ mensage: 'É preciso preencher todos os campos obrigatórios.' })
        }

        try {
            const newLevel = levelsRepository.create({ levelId, levelPoints, totalPoints })

            await levelsRepository.save(newLevel)

            return res.status(201).json(newLevel)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error.' })
        }
    }
}