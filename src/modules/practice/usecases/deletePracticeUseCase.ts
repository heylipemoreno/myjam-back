import{PracticeRepository}from "../repositories/PracticeRepository";

export class DeletePracticeUseCase{
    async execute(dataID:number){
        try{
            const deleted=await PracticeRepository.delete({id:dataID});
            return deleted
        } catch(error){
            console.log(error)
        }
    }
}

export default new DeletePracticeUseCase();