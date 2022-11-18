import { Request, Response } from 'express'
import { ClassesRepository } from '../repositories/ClassesRepository'

export class ClassesController {
	async create(req: Request, res: Response) {
        const { className } = req.body

		if (!className) {
			return res.status(400).json({ message: 'É obrigatório informar o nome da aula desejada.' })
		}
		
		try {
			const newClass = ClassesRepository.create({ className })
            
			await ClassesRepository.save(newClass)

			return res.status(201).json(newClass)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const classes = await ClassesRepository.find()

			res.status(200).json(classes);
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		
		try {
			const classes = await ClassesRepository.findOneBy({ id: Number(id) })

			if (!classes) {
				return res.status(404).json({ message: 'Esta aula não está registrada.' })
			} else {
				res.status(200).json(classes);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async update(req: Request, res: Response) {
		const { className } = req.body
		const { id } = req.params

		try {
			const classes = await ClassesRepository.findOneBy({ id: Number(id) })

			if (!classes) {
				return res.status(404).json({ message: 'Esta aula não está registrada.' })
			} else {
				await ClassesRepository.update(id, {
					className
				});
	
				res.status(200).json({ message: 'Esta aula foi atualizada com sucesso.' });
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params

		try {
			const classes = await ClassesRepository.findOneBy({ id: Number(id) })

			if (!classes) {
				return res.status(404).json({ message: 'Esta aula não está registrada.' })
			} else {
				await ClassesRepository.delete({ id: Number(id) })

				res.status(200).json({ message: 'Esta aula foi removida com sucesso.' })
			}
					
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}		
	}
}
