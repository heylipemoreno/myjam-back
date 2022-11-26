import{ExperienceToModel}from "../helpers/ExperienceToModel";
import{ExperienceRepository}from "../repositories/ExperienceRepository";

export class ListExperienceUseCase{
    async execute(){
        try{
            const list=await ExperienceRepository.find()
            const listExperience=list.map(ExperienceToModel)
            return listExperience
        }catch (error){
            console.log(error)
        }
    }
}

export default new ListExperienceUseCase();