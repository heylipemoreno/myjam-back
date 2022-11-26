import{LearnRepository}from "../repositories/LearnRepository";

export class DeleteLearnUseCase{
    async execute(dataID:number){
        try{
            const deleted=await LearnRepository.delete({id:dataID});
            return deleted
        } catch(error){
            console.log(error)
        }
    }
}

export default new DeleteLearnUseCase();