import constants from "../../../config/constants/constants";
import{Instrument}from "../../../entities/Instrument";
import{InstrumentRepository}from "../repositories/InstrumentRepository";

export class UpdateInstrumentUseCase{
    async execute(data:Instrument,dataID:number){
        try{
            const{instrumentOption,instrumentImageLink,instrumentHoverImageLink}=data
            const instrument=await InstrumentRepository.findOneBy({id:dataID});
            if(!instrument){
                return constants.CRUD.INSTRUMENT.NOT_FOUND;
            }
            const updated=await InstrumentRepository.update({id:dataID},{
                instrumentOption,
                instrumentImageLink,
                instrumentHoverImageLink
            });
            return constants.CRUD.INSTRUMENT.UPDATE;
        } catch(error){
            console.log(error)
        }
    }
}

export default new UpdateInstrumentUseCase();