import { Lessons } from "../../../entities/Lessons";
import { LessonsToModel } from "../helpers/LessonsToModel";
import { LessonsRepository } from "../repositories/LessonsRepository";

export class CreateLessonsUseCase {
    async execute(data: Lessons) {
        try {
            const { lessonName, lessonImageLink } = data
            const newLesson = LessonsRepository.create({ lessonName, lessonImageLink });
            await LessonsRepository.save(newLesson);
            return LessonsToModel(newLesson)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateLessonsUseCase();