import { LessonsToModel } from "../helpers/LessonsToModel";
import { LessonsRepository } from "../repositories/LessonsRepository";

export class ListLessonsUseCase {
    async execute() {
        try {
            const lessons = await LessonsRepository.find()
            const listLessons = lessons.map(LessonsToModel)
            return listLessons
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListLessonsUseCase();