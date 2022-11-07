import { Request, Response } from "express";
import { genresRepository } from "../repositories/genres-repository";
import { usersRepository } from "../repositories/users-repository";

export class UsersController {
    async create(req: Request, res: Response) {
        const { name, nickname, email, password } = req.body

        if (!name || !nickname || !email || !password) {
            return res.status(400).json({ mensage: 'É preciso preencher todos os campos obrigatórios.' })
        }

        try {
            const newUser = usersRepository.create({ name, nickname, email, password })

            await usersRepository.save(newUser)

            return res.status(201).json(newUser)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error.' })
        }
    }

    async generoUsuario(req: Request, res: Response) {
        const { genreId } = req.body
        const { usuario } = req.params

        try {
            const user = await usersRepository.findOneBy({userId: Number(usuario)})

            if (!usuario) {
                return res.status(404).json({ message: 'Usuário não encontrado.'})
            }

            const genero = await genresRepository.findOneBy({genreId: Number(genreId)})

            if (!genero) {
                return res.status(404).json({ message: 'Gênero musical inválido.'})
            }

            await usersRepository.update(usuario, {
                ...user,
                genres: [genero]
            })

            return res.status(204).json(usuario)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal Server Error.' })
        }
    }
}
