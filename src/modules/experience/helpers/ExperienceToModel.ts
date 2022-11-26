import{Experience}from "../../../entities/Experience";

export function ExperienceToModel(data:Experience){
    if (!data){
        return
    }

    const experience={
        id:data.id,
        experienceOption:data.experienceOption,
    }

    return experience;
}