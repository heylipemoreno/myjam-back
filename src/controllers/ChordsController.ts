import { Request, Response } from 'express'
import constants from '../config/constants/constants'
import { ChordsRepository } from '../repositories/ChordsRepository'
import { ChordsToModel } from '../utils/helpers/ChordsToModel'

export class ChordsController {
	async create(req: Request, res: Response) {
		const { chordName, chordImageLink, chordSoundLink } = req.body
		try {
			const newChord = ChordsRepository.create({ chordName, chordImageLink, chordSoundLink })
			await ChordsRepository.save(newChord)
			return res.status(201).json(ChordsToModel(newChord))
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async list(req: Request, res: Response) {
		try {
			const chords = await ChordsRepository.find()
			const listChords = chords.map(ChordsToModel)
			res.status(200).json(listChords);
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		try {
			const chord = await ChordsRepository.findOneBy({ id: Number(id) })
			if (!chord) {
				return res.status(404).json(constants.CRUD.CHORDS.NOT_FOUND)
			} else {
				res.status(200).json(ChordsToModel(chord));
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async update(req: Request, res: Response) {
		const { chordName, chordImageLink, chordSoundLink } = req.body
		const { id } = req.params
		try {
			const chord = await ChordsRepository.findOneBy({ id: Number(id) })
			if (!chord) {
				return res.status(404).json(constants.CRUD.CHORDS.NOT_FOUND)
			} else {
				await ChordsRepository.update(id, {
					chordName, 
					chordImageLink, 
					chordSoundLink
				});
				res.status(200).json(constants.CRUD.CHORDS.UPDATE);
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params
		try {
			const chord = await ChordsRepository.findOneBy({ id: Number(id) })
			if (!chord) {
				return res.status(404).json(constants.CRUD.CHORDS.NOT_FOUND)
			} else {
				await ChordsRepository.delete({ id: Number(id) })
				res.status(204).json()
			}
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}
}