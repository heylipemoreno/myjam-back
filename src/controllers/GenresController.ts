import { Request, Response } from 'express'
import constants from '../config/constants/constants'
import { GenresRepository } from '../repositories/GenresRepository'

export class GenresController {
	async create(req: Request, res: Response) {
		const { genreName } = req.body
		try {
			const newGenre = GenresRepository.create({ genreName })
			await GenresRepository.save(newGenre)
			return res.status(201).json(newGenre)
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async list(req: Request, res: Response) {
		try {
			const genres = await GenresRepository.find()
			res.status(200).json(genres);
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		try {
			const genre = await GenresRepository.findOneBy({ id: Number(id) })
			if (!genre) {
				return res.status(404).json(constants.CRUD.GENRES.NOT_FOUND)
			} else {
				res.status(200).json(genre);
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async update(req: Request, res: Response) {
		const { genreName } = req.body
		const { id } = req.params
		try {
			const genre = await GenresRepository.findOneBy({ id: Number(id) })
			if (!genre) {
				return res.status(404).json(constants.CRUD.GENRES.NOT_FOUND)
			} else {
				await GenresRepository.update(id, {
					genreName
				});
				res.status(200).json(constants.CRUD.GENRES.UPDATE);
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params
		try {
			const genre = await GenresRepository.findOneBy({ id: Number(id) })
			if (!genre) {
				return res.status(404).json(constants.CRUD.GENRES.NOT_FOUND)
			} else {
				await GenresRepository.delete({ id: Number(id) })
				res.status(204).json()
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}		
	}
}