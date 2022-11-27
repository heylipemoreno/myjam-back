import { Questions } from "../../../entities/Questions";

export function QuestionsToModel(data: Questions) {
    if (!data) {
        return
    }

    const question = {
        id: data.id,
        questionTitle: data.questionTitle,
        questionImageLink: data.questionImageLink,
        questionContent: data.questionContent,
        questionOptions: data.questionOptions,
        questionOptionCorrect: data.questionOptionCorrect,
        questionTemplate: data.questionTemplate,
        isExplanation: data.isExplanation,
        lessonsId: data.lessonsId
    }

    return question;
}