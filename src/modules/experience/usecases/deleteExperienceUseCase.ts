import{ExperienceRepository}from "../repositories/ExperienceRepository";

export class DeleteExperienceUseCase{
    async execute(dataID:number){
        try{
            const deleted=await ExperienceRepository.delete({id:dataID});
            return deleted
        } catch(error){
            console.log(error)
        }
    }
}

export default new DeleteExperienceUseCase();