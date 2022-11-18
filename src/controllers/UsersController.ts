import { Request, Response } from 'express'
import { UsersRepository } from '../repositories/UsersRepository'

export class UsersController {
	async create(req: Request, res: Response) {
		const { userName, nickname, email, password, age } = req.body

		if (!userName && !nickname && !email && !password && !age) {
			return res.status(400).json({ message: 'Os campos userName, nickname, email, password e age são obrigatórios.' })
		}
		const totalPoints = 0;
		try {
			const newUser = UsersRepository.create({ userName, nickname, email, password, age, totalPoints })

			await UsersRepository.save(newUser)

			return res.status(201).json(newUser)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Houve um erro ao fazer requisição com o servidor.' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const users = await UsersRepository.find()

			res.status(200).json(users);
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Houve um erro ao fazer requisição com o servidor.' })
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		
		try {
			const user = await UsersRepository.findOneBy({ id: Number(id) })

			if (!user) {
				return res.status(404).json({ message: 'O usuário não existe.' })
			} else {
				res.status(200).json(user);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Houve um erro ao fazer requisição com o servidor.' })
		}
	}

	async update(req: Request, res: Response) {
		const { userName, nickname, email, password, age, totalPoints, qtdSongs, qtdChords } = req.body
		const { id } = req.params

		try {
			const user = await UsersRepository.findOneBy({ id: Number(id) })

			if (!user) {
				return res.status(404).json({ message: 'Houve um erro ao fazer requisição com o servidor.' })
			} else {
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
	
				res.status(200).json({ message: 'Os dados do usuário foram atualizados com sucesso.' });
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Houve um erro ao fazer requisição com o servidor.' })
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params

		try {
			const user = await UsersRepository.findOneBy({ id: Number(id) })

			if (!user) {
				return res.status(404).json({ message: 'O usuário não existe.' })
			} else {
				await UsersRepository.delete({ id: Number(id) })

				res.status(200).json({ message: 'O usuário foi removido com sucesso.' })
			}
					
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Houve um erro ao fazer requisição com o servidor.' })
		}		
	}
}