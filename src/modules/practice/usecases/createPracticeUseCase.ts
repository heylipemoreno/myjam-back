import{Practice}from "../../../entities/Practice";
import{PracticeToModel}from "../helpers/PracticeToModel";
import{PracticeRepository}from "../repositories/PracticeRepository";

export class CreatePracticeUseCase{
    async execute(data:Practice){
        try {
            const {practiceOption}=data
            const newPractice=PracticeRepository.create({practiceOption});
            await PracticeRepository.save(newPractice);
            return PracticeToModel(newPractice);
        } catch(error){
            console.log(error);
        }
    }
}

export default new CreatePracticeUseCase();