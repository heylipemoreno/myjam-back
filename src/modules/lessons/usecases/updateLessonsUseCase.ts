import constants from "../../../config/constants/constants";
import { Lessons } from "../../../entities/Lessons";
import { LessonsRepository } from "../repositories/LessonsRepository";

export class UpdateLessonsUseCase {
    async execute(data: Lessons, dataID: number) {
        try {
            const { lessonName, lessonImageLink } = data
            const lesson = await LessonsRepository.findOneBy({ id: dataID });
            if (!lesson) {
                return 
            }
            await LessonsRepository.update({ id: dataID }, {
                lessonName,
                lessonImageLink
            });
            return constants.CRUD.LESSONS.UPDATE;
        } catch (error) {
            console.log(error)
        }
    }
}

export default new UpdateLessonsUseCase();