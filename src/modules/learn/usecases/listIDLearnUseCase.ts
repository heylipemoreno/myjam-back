import constants from "../../../config/constants/constants";
import{LearnToModel}from "../helpers/LearnToModel";
import{LearnRepository}from "../repositories/LearnRepository";

export class ListIDLearnUseCase{
    async execute(dataID: number){
        try{
            const learn=await LearnRepository.findOneBy({id:dataID});
            if (!learn){
                return
            }
            return LearnToModel(learn);
        } catch (error){
            console.log(error);
        }
    }
}

export default new ListIDLearnUseCase();