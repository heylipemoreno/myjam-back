import constants from "../../../config/constants/constants";
import{Experience}from "../../../entities/Experience";
import{ExperienceRepository}from "../repositories/ExperienceRepository";

export class UpdateExperienceUseCase{
    async execute(data:Experience,dataID:number){
        try{
            const{experienceOption}=data
            const experience=await ExperienceRepository.findOneBy({id:dataID});
            if(!experience){
                return 
            }
            const updated=await ExperienceRepository.update({id:dataID},{
                experienceOption,
            })
            return constants.CRUD.EXPERIENCE.UPDATE;
        } catch(error){
            console.log(error);
        }
    }
}

export default new UpdateExperienceUseCase();