import{InstrumentRepository}from "../repositories/InstrumentRepository";

export class DeleteInstrumentUseCase{
    async execute(dataID:number){
        try{
            const deleted=await InstrumentRepository.delete({id:dataID});
            return deleted
        } catch(error){
            console.log(error)
        }
    }
}

export default new DeleteInstrumentUseCase();