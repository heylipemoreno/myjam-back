import{Practice}from "../../../entities/Practice";

export function PracticeToModel(data:Practice){
    if (!data){
        return
    }

    const practice={
        id:data.id,
        practiceOption:data.practiceOption,
    }

    return practice;
}