import { Request, Response } from 'express'
import constants from '../config/constants/constants'
import { ChordsRepository } from '../repositories/ChordsRepository'

export class ChordsController {
	async create(req: Request, res: Response) {
		const { chordName } = req.body

		if (!chordName) {
			return res.status(400).json(constants.ERROR.MESSAGE.VALIDATION)
		}

		try {
			const newChord = ChordsRepository.create({ chordName })

			await ChordsRepository.save(newChord)

			return res.status(201).json(newChord)
		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async list(req: Request, res: Response) {
		try {
			const chords = await ChordsRepository.find()

			res.status(200).json(chords);
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
				res.status(200).json(chord);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json(constants.CRUD.ERROR)
		}
	}

	async update(req: Request, res: Response) {
		const { chordName } = req.body
		const { id } = req.params

		try {
			const chord = await ChordsRepository.findOneBy({ id: Number(id) })

			if (!chord) {
				return res.status(404).json(constants.CRUD.CHORDS.NOT_FOUND)
			} else {
				await ChordsRepository.update(id, {
					chordName
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
