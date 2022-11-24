import { Request, Response } from 'express'
import { UsersRepository } from '../repositories/UsersRepository'
import bcrypt from 'bcryptjs'
import constants from '../config/constants/constants';
import { LessonsRepository } from '../repositories/LessonsRepository';
import { UsersLessonsRepository } from '../repositories/UsersLessonsRepository';
import { UsersToModel } from '../services/helpers/UsersToModel';

export class UsersController {

	async list(req: Request, res: Response) {
		try {
			const users = await UsersRepository.find()
			const listUsers = users.map(UsersToModel)
			res.status(200).json(listUsers);
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
				res.status(200).json(UsersToModel(user));
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async update(req: Request, res: Response) {
		if (req.body.password) {
			req.body.password = bcrypt.hashSync(req.body.password, 10);
		}
		const { userName, email, password, totalPoints, qtdSongs, qtdChords, questionsCompleted } = req.body
		const { id } = req.params
		try {
			const user = await UsersRepository.findOneBy({ id: Number(id) })
			if (!user) {
				return res.status(404).json(constants.CRUD.USERS.NOT_FOUND)
			} else {
				const userUpdated = await UsersRepository.update(id, {
					userName,
					email,
					password,
					totalPoints,
					qtdSongs,
					qtdChords,
					questionsCompleted
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

	async listOnboarding(req: Request, res: Response) {
		const info = req.body.info;
		try {
			const user = await UsersRepository.findOneBy({ id: Number(info.id) })
			const relacion = await UsersLessonsRepository.findBy({
				usersId: user?.id
			})
			res.status(200).send({
				User: UsersToModel(user!),
				Status: relacion
			})
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async completedLesson(req: Request, res: Response) {
		const info = req.body.info;
		const { id } = req.params
		try {
			const user = await UsersRepository.findOneBy({ id: Number(info.id) })
			const lesson = await LessonsRepository.findOneBy({ id: Number(id) })
			const relacion = await UsersLessonsRepository.findOneBy({
				usersId: Number(user?.id),
				lessonsId: Number(lesson?.id)
			})
			if (relacion?.completedAt != null) {
				return res.status(200).send({
					message: 'Lição concluida'
				})
			}
			const relacionUpdated = await UsersLessonsRepository.update(relacion!.id, {
				usersId: Number(user?.id),
				lessonsId: Number(lesson?.id),
				completedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
			})

			const userUpdated = await UsersRepository.update(user!.id, {
				totalPoints: user!.totalPoints! + relacion!.points!
			})

			res.status(200).send({
				message: 'Lição concluida.'
			})
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}
}