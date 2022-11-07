import { Request, Response } from "express";
import { Any } from "typeorm";
import { genresRepository } from "../repositories/genres-repository";
import { levelsRepository } from "../repositories/levels-repository";
import { songsRepository } from "../repositories/songs-repository";

export class SongsController {
    async create(req: Request, res: Response) {
        const { videoLink, songContentLink } = req.body
        const { genero, nivel } = req.params

        try {
            const genreId = await genresRepository.findOneBy({genreId: Number(genero)})
            const levelId = await levelsRepository.findOneBy({levelId: Number(nivel)})

            if (!genero || !nivel) {
                return res.status(404).json({ message: 'Gênero musical ou nível do usuário não encontrado.'})
            }

            const newSong = songsRepository.create({ videoLink, songContentLink, genreId, levelId } as any)

            await songsRepository.save(newSong)

            return res.status(201).json(newSong)
        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: 'Internal Server Error.'})
        }
    }
}