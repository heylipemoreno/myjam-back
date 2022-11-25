import { LessonsRepository } from "../repositories/LessonsRepository";

export class DeleteLessonsUseCase {
    async execute(dataID: number) {
        try {
            await LessonsRepository.delete({ id: dataID })
            return
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteLessonsUseCase();