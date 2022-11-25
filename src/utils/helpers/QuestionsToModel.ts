import { Questions } from "../../entities/Questions";

export function QuestionsToModel(data: Questions) {
    if (!data) {
        return
    }

    let options;
    if (data.questionOptions === '') {
        options = "No options"
    } else {
        options = JSON.parse(data.questionOptions)
    }

    const question = {
        id: data.id,
        questionTitle: data.questionTitle,
        questionImageLink: data.questionImageLink,
        questionContent: data.questionContent,
        questionOptions: options,
        questionOptionCorrect: data.questionOptionCorrect,
        questionTemplate: data.questionTemplate,
        isExplanation: data.isExplanation,
        lessonsId: data.lessonsId,
        songsId: data.songsId
    }

    return question;
}