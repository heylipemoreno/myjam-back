import { Request, Response } from 'express'
import { SongsRepository } from '../repositories/SongsRepository'

export class SongsController {
	async create(req: Request, res: Response) {
		const { songName, songVideoLink, songContentLink, classesId} = req.body

		if (!songName && !songVideoLink && !songContentLink && !classesId) {
			return res.status(400).json({ message: 'Os campos songName, songVideoLink, songContentLink e classesId são obrigatórios.' })
		}

		try {
			const newSong = SongsRepository.create({ songName, songVideoLink, songContentLink, classesId})

			await SongsRepository.save(newSong)

			return res.status(201).json(newSong)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const songs = await SongsRepository.find()

			res.status(200).json(songs);
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		
		try {
			const song = await SongsRepository.findOneBy({ id: Number(id) })

			if (!song) {
				return res.status(404).json({ message: 'Esta música não está registrada.' })
			} else {
				res.status(200).json(song);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async update(req: Request, res: Response) {
		const { songName, songVideoLink, songContentLink, classesId } = req.body
		const { id } = req.params

		try {
			const song = await SongsRepository.findOneBy({ id: Number(id) })

			if (!song) {
				return res.status(404).json({ message: 'Esta música não está registrada.' })
			} else {
				await SongsRepository.update(id, {
					songName,
					songVideoLink,
					songContentLink,
					classesId
				});
	
				res.status(200).json({ message: 'Os dados da música foram atualizados com sucesso.' });
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params

		try {
			const song = await SongsRepository.findOneBy({ id: Number(id) })

			if (!song) {
				return res.status(404).json({ message: 'Esta música não está registrada.' })
			} else {
				await SongsRepository.delete({ id: Number(id) })

				res.status(200).json({ message: 'A música foi removida com sucesso.' })
			}
					
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}		
	}
}