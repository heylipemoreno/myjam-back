import{Experience}from "../../../entities/Experience";
import{ExperienceToModel}from "../helpers/ExperienceToModel";
import{ExperienceRepository}from "../repositories/ExperienceRepository";

export class CreateExperienceUseCase{
    async execute(data:Experience){
        try {
            const {experienceOption}=data
            const newExperience=ExperienceRepository.create({experienceOption});
            await ExperienceRepository.save(newExperience);
            return ExperienceToModel(newExperience);
        } catch(error){
            console.log(error);
        }
    }
}

export default new CreateExperienceUseCase();