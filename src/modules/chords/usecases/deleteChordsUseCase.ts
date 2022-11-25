import { ChordsRepository } from "../repositories/ChordsRepository";

export class DeleteChordsUseCase {
    async execute(dataID: number) {
        try {
            const deleted = await ChordsRepository.delete({ id: dataID })
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteChordsUseCase();