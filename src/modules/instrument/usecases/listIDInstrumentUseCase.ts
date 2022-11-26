import constants from "../../../config/constants/constants";
import {InstrumentToModel} from "../helpers/InstrumentToModel";
import {InstrumentRepository} from "../repositories/InstrumentRepository";

export class ListIDInstrumentUseCase{
    async execute(dataID: number){
        try {
            const instrument=await InstrumentRepository.findOneBy({id:dataID});
            if (!instrument) {
                return constants.CRUD.INSTRUMENT.NOT_FOUND;
            }
            return InstrumentToModel(instrument);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ListIDInstrumentUseCase();