import constants from "../../../config/constants/constants";
import { QuestionsToModel } from "../helpers/QuestionsToModel";
import { QuestionsRepository } from "../repositories/QuestionsRepository";

export class ListIDQuestionsUseCase {
    async execute(dataID: number) {
        try {
            const question = await QuestionsRepository.findOneBy({ id: dataID })
            if (!question) {
                return constants.CRUD.QUESTIONS.NOT_FOUND
            }
            return QuestionsToModel(question)
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListIDQuestionsUseCase()