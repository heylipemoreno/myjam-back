import { Lessons } from "../../../entities/Lessons";

export function LessonsToModel(data: Lessons) {
    if (!data) {
        return
    }

    const lessons = {
        id: data.id,
        lessonName: data.lessonName,
        lessonImageLink: data.lessonImageLink
    }

    return lessons
}