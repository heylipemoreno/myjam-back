import{PracticeToModel}from "../helpers/PracticeToModel";
import{PracticeRepository}from "../repositories/PracticeRepository";

export class ListPracticeUseCase{
    async execute(){
        try{
            const list=await PracticeRepository.find()
            const listPractice=list.map(PracticeToModel)
            return listPractice
        }catch (error){
            console.log(error)
        }
    }
}

export default new ListPracticeUseCase();