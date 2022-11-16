import { Request, Response } from 'express'
import { ChordsRepository } from '../repositories/ChordsRepository'

export class ChordsController {
	async create(req: Request, res: Response) {
		const { chordName } = req.body

		if (!chordName) {
			return res.status(400).json({ message: 'É obrigatório informar o nome do acorde desejado.' })
		}

		try {
			const newChord = ChordsRepository.create({ chordName })

			await ChordsRepository.save(newChord)

			return res.status(201).json(newChord)
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async list(req: Request, res: Response) {
		try {
			const chords = await ChordsRepository.find()

			res.status(200).json(chords);
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async listOne(req: Request, res: Response) {
		const { id } = req.params
		
		try {
			const chord = await ChordsRepository.findOneBy({ id: Number(id) })

			if (!chord) {
				return res.status(404).json({ message: 'Este acorde não está registrado.' })
			} else {
				res.status(200).json(chord);
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async update(req: Request, res: Response) {
		const { chordName } = req.body
		const { id } = req.params

		try {
			const chord = await ChordsRepository.findOneBy({ id: Number(id) })

			if (!chord) {
				return res.status(404).json({ message: 'Este acorde não está registrado.' })
			} else {
				await ChordsRepository.update(id, {
					chordName
				});
	
				res.status(200).json({ message: 'O acorde foi atualizado com sucesso.' });
			}

		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}
	}

	async delete(req: Request, res: Response) {
		const { id } = req.params

		try {
			const chord = await ChordsRepository.findOneBy({ id: Number(id) })

			if (!chord) {
				return res.status(404).json({ message: 'Este acorde não está registrado.' })
			} else {
				await ChordsRepository.delete({ id: Number(id) })

				res.status(200).json({ message: 'Este acorde foi removido com sucesso.' })
			}
					
		} catch (error) {
			console.log(error)
			return res.status(500).json({ message: 'Algo deu errado.' })
		}		
	}
}
