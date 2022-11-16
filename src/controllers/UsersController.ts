import { Request, Response } from 'express'
import { UsersRepository } from '../repositories/UsersRepository'

export class UsersController {
	async create(req: Request, res: Response) {
		const { userName, nickname, email, password } = req.body

		if (!userName && !nickname && !email && !password) {
			return res.status(400).json({ message: 'Os campos userName, nickname, email e password são obrigatórios.' })
		}

		try {
			const newUser = UsersRepository.create({ userName, nickname, email, password })

			await UsersRepository.save(newUser)

			return res.status(201).json(newUser)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Os campos userName, nickname, email e password são obrigatórios.' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const users = await UsersRepository.find()

			res.status(200).json(users);
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async update(req: Request, res: Response) {
		const { userName, nickname, email, password, age, totalPoints, qtdSongs, qtdChords } = req.body
		const { id } = req.params

		try {
			const user = await UsersRepository.findOneBy({ id: Number(id) })

			await UsersRepository.update(id, {
				userName,
				nickname,
				email,
				password,
				age,
				totalPoints,
				qtdSongs,
				qtdChords
			});

			res.status(200).json(user);

			if (!user) {
				return res.status(404).json({ message: 'O usuário não existe.' })
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}
}
