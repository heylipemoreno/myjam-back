import{Learn}from "../../../entities/Learn";
import{LearnToModel}from "../helpers/LearnToModel";
import{LearnRepository}from "../repositories/LearnRepository";

export class CreateLearnUseCase{
    async execute(data:Learn){
        try {
            const {learnOption}=data
            const newLearn=LearnRepository.create({learnOption});
            await LearnRepository.save(newLearn);
            return LearnToModel(newLearn);
        } catch(error){
            console.log(error);
        }
    }
}

export default new CreateLearnUseCase();