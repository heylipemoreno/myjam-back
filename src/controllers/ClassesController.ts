import { Request, Response } from 'express'
import constants from '../config/constants/constants'
import { ClassesRepository } from '../repositories/ClassesRepository'

export class ClassesController {
	async create(req: Request, res: Response) {
        const { classeName } = req.body

		if (!classeName) {
			return res.status(400).json(constants.ERROR.MESSAGE.VALIDATION)
		}
		
		try {
			const newClass = ClassesRepository.create({ classeName })
            
			await ClassesRepository.save(newClass)

			return res.status(201).json(newClass)
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async list(req: Request, res: Response) {
		try {
			const classes = await ClassesRepository.find()

			res.status(200).json(classes);
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		
		try {
			const classes = await ClassesRepository.findOneBy({ id: Number(id) })

			if (!classes) {
				return res.status(404).json(constants.ERROR.MESSAGE.VALIDATION)
			} else {
				res.status(200).json(classes);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async update(req: Request, res: Response) {
		const { classeName } = req.body
		const { id } = req.params

		try {
			const classes = await ClassesRepository.findOneBy({ id: Number(id) })

			if (!classes) {
				return res.status(404).json(constants.CRUD.CLASSES.NOT_FOUND)
			} else {
				await ClassesRepository.update(id, {
					classeName
				});
	
				res.status(200).json(constants.CRUD.CLASSES.UPDATE);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params

		try {
			const classes = await ClassesRepository.findOneBy({ id: Number(id) })

			if (!classes) {
				return res.status(404).json(constants.CRUD.CLASSES.NOT_FOUND)
			} else {
				await ClassesRepository.delete({ id: Number(id) })

				res.status(204).json()
			}
					
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}		
	}
}
