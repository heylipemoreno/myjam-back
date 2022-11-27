import { Questions } from "../../../entities/Questions";
import { QuestionsToModel } from "../helpers/QuestionsToModel";
import { QuestionsRepository } from "../repositories/QuestionsRepository";

export class CreateQuestionsUseCase{
    async execute(data:Questions){
        try {
            const { questionTitle, questionImageLink, questionContent, questionOptions, questionOptionCorrect, questionTemplate, isExplanation, lessonsId } = data
            const newQuestion = QuestionsRepository.create({ questionTitle, questionImageLink, questionContent, questionOptions, questionOptionCorrect, questionTemplate, isExplanation, lessonsId });
            await QuestionsRepository.save(newQuestion);
            return QuestionsToModel(newQuestion);
        } catch (error) {
            console.log(error)
        }
    }
}

export default new CreateQuestionsUseCase()