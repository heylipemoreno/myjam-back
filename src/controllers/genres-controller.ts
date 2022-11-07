import { Request, Response } from "express";
import { genresRepository } from "../repositories/genres-repository";

export class GenresController {
    async create(req: Request, res: Response) {
        const { name } = req.body

        if (!name) {
            return res.status(400).json({ mensage: 'É preciso informar o nome do gênero musical.' })
        }

        try {
            const newGenre = genresRepository.create({ name })

            await genresRepository.save(newGenre)

            return res.status(201).json(newGenre)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error.' })
        }
    }
}