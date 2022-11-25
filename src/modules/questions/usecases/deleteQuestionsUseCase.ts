import { QuestionsRepository } from "../repositories/QuestionsRepository";

export class DeleteQuestionsUseCase {
    async execute(dataID: number) {
        try {
            const deleted = await QuestionsRepository.delete({ id: dataID })
            return deleted
        } catch (error) {
            console.log(error)
        }
    }
}

export default new DeleteQuestionsUseCase();