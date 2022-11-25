import constants from "../../../config/constants/constants";
import { LessonsToModel } from "../helpers/LessonsToModel";
import { LessonsRepository } from "../repositories/LessonsRepository";

export class ListIDLessonsUseCase {
    async execute(dataID: number) {
        try {
            const lesson = await LessonsRepository.findOneBy({ id: dataID });
            if (!lesson) {
                return constants.CRUD.LESSONS.NOT_FOUND;
            }
            return LessonsToModel(lesson);
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDLessonsUseCase();