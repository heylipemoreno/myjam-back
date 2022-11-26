import{LearnToModel}from "../helpers/LearnToModel";
import{LearnRepository}from "../repositories/LearnRepository";

export class ListLearnUseCase{
    async execute(){
        try{
            const list=await LearnRepository.find();
            const listLearn=list.map(LearnToModel);
            return listLearn;
        }catch (error){
            console.log(error);
        }
    }
}

export default new ListLearnUseCase();