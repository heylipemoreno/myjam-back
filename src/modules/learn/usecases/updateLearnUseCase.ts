import constants from "../../../config/constants/constants";
import{Learn}from "../../../entities/Learn";
import{LearnRepository}from "../repositories/LearnRepository";

export class UpdateLearnUseCase{
    async execute(data:Learn,dataID:number){
        try{
            const{learnOption}=data
            const learn=await LearnRepository.findOneBy({id:dataID});
            if(!learn){
                return constants.CRUD.LEARN.NOT_FOUND;
            }
            const updated=await LearnRepository.update({id:dataID},{
                learnOption,
            })
            return constants.CRUD.LEARN.UPDATE;
        } catch(error){
            console.log(error);
        }
    }
}

export default new UpdateLearnUseCase();