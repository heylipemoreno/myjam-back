import { QuestionsToModel } from "../helpers/QuestionsToModel";
import { QuestionsRepository } from "../repositories/QuestionsRepository";

export class ListQuestionsUseCase {
    async execute() {
        try {
            const list = await QuestionsRepository.find()
            const listQuestions = list.map(QuestionsToModel)
            return listQuestions
        } catch (error) {
            console.log(error)
        }
    }
}

export default new ListQuestionsUseCase();