import{Learn}from "../../../entities/Learn";

export function LearnToModel(data:Learn){
    if (!data){
        return
    }

    const learn={
        id:data.id,
        learnOption:data.learnOption,
    }

    return learn;
}