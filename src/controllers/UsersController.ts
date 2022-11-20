import { Request, Response } from 'express'
import { UsersRepository } from '../repositories/UsersRepository'
import bcrypt from 'bcryptjs'
import constants from '../config/constants/constants';

export class UsersController {
	async create(req: Request, res: Response) {
		req.body.password = bcrypt.hashSync(req.body.password,10);
		const { userName, email, password } = req.body

		if (!userName && !email && !password) {
			return res.status(400).json(constants.ERROR.MESSAGE.VALIDATION);
		}
		try {
			const newUser = UsersRepository.create({ userName, email, password })

			await UsersRepository.save(newUser)

			return res.status(201).json(newUser)
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async list(req: Request, res: Response) {
		try {
			const users = await UsersRepository.find()

			res.status(200).json(users);
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		
		try {
			const user = await UsersRepository.findOneBy({ id: Number(id) })

			if (!user) {
				return res.status(404).json(constants.CRUD.USERS.NOT_FOUND)
			} else {
				res.status(200).json(user);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async update(req: Request, res: Response) {
		const { userName, email, password, totalPoints, qtdSongs, qtdChords } = req.body
		const { id } = req.params

		try {
			const user = await UsersRepository.findOneBy({ id: Number(id) })

			if (!user) {
				return res.status(404).json(constants.CRUD.USERS.NOT_FOUND)
			} else {
				await UsersRepository.update(id, {
					userName,
					email,
					password,
					totalPoints,
					qtdSongs,
					qtdChords
				});
	
				res.status(200).json(constants.CRUD.USERS.UPDATE);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params

		try {
			const user = await UsersRepository.findOneBy({ id: Number(id) })

			if (!user) {
				return res.status(404).json(constants.CRUD.USERS.NOT_FOUND)
			} else {
				await UsersRepository.delete({ id: Number(id) })

				res.status(204).send()
			}
					
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}		
	}
}