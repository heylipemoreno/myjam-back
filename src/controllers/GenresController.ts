import { Request, Response } from 'express'
import { GenresRepository } from '../repositories/GenresRepository'

export class GenresController {
	async create(req: Request, res: Response) {
		const { genreName } = req.body

		if (!genreName) {
			return res.status(400).json({ message: 'É obrigatório informar o nome do gênero musical desejado.' })
		}

		try {
			const newGenre = GenresRepository.create({ genreName })

			await GenresRepository.save(newGenre)

			return res.status(201).json(newGenre)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const genres = await GenresRepository.find()

			res.status(200).json(genres);
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		
		try {
			const genre = await GenresRepository.findOneBy({ id: Number(id) })

			if (!genre) {
				return res.status(404).json({ message: 'Este gênero musical não está registrado.' })
			} else {
				res.status(200).json(genre);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async update(req: Request, res: Response) {
		const { genreName } = req.body
		const { id } = req.params

		try {
			const genre = await GenresRepository.findOneBy({ id: Number(id) })

			if (!genre) {
				return res.status(404).json({ message: 'Este gênero musical não está registrado.' })
			} else {
				await GenresRepository.update(id, {
					genreName
				});
	
				res.status(200).json({ message: 'O gênero musical foi atualizado com sucesso.' });
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params

		try {
			const genre = await GenresRepository.findOneBy({ id: Number(id) })

			if (!genre) {
				return res.status(404).json({ message: 'Este gênero musical não está registrado.' })
			} else {
				await GenresRepository.delete({ id: Number(id) })

				res.status(200).json({ message: 'Este gênero musical foi removido com sucesso.' })
			}
					
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}		
	}
}
