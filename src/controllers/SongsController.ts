import { Request, Response } from 'express'
import constants from '../config/constants/constants'
import { SongsRepository } from '../repositories/SongsRepository'

export class SongsController {
	async create(req: Request, res: Response) {
		const { songName, songLink, songContent } = req.body;
		try {
			const newSong = SongsRepository.create({ songName, songLink, songContent })
			await SongsRepository.save(newSong)
			return res.status(201).json(newSong)
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async list(req: Request, res: Response) {
		try {
			const songs = await SongsRepository.find()
			res.status(200).json(songs);
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		try {
			const song = await SongsRepository.findOneBy({ id: Number(id) })
			if (!song) {
				return res.status(404).json(constants.CRUD.SONGS.NOT_FOUND)
			} else {
				res.status(200).json(song);
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async update(req: Request, res: Response) {
		const { songName, songLink, songContent } = req.body
		const { id } = req.params
		try {
			const song = await SongsRepository.findOneBy({ id: Number(id) })
			if (!song) {
				return res.status(404).json(constants.CRUD.SONGS.NOT_FOUND)
			} else {
				await SongsRepository.update(id, {
					songName, 
					songLink, 
					songContent
				});
				res.status(200).json(constants.CRUD.SONGS.UPDATE);
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params
		try {
			const song = await SongsRepository.findOneBy({ id: Number(id) })
			if (!song) {
				return res.status(404).json(constants.CRUD.SONGS.NOT_FOUND)
			} else {
				await SongsRepository.delete({ id: Number(id) })
				res.status(204).json()
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}
}