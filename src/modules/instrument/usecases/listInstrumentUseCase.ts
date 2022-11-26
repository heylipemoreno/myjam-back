import{InstrumentToModel}from "../helpers/InstrumentToModel";
import{InstrumentRepository}from "../repositories/InstrumentRepository";

export class ListInstrumentUseCase{
    async execute(){
        try{
            const list=await InstrumentRepository.find()
            const listInstrument=list.map(InstrumentToModel)
            return listInstrument
        }catch (error){
            console.log(error)
        }
    }
}

export default new ListInstrumentUseCase();