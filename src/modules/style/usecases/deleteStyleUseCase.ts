import{StyleRepository}from "../repositories/StyleRepository";

export class DeleteStyleUseCase{
    async execute(dataID:number){
        try{
            const deleted=await StyleRepository.delete({id:dataID});
            return deleted
        } catch(error){
            console.log(error)
        }
    }
}

export default new DeleteStyleUseCase();