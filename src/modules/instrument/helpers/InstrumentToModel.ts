import{Instrument}from "../../../entities/Instrument";

export function InstrumentToModel(data:Instrument){
    if (!data){
        return
    }

    const instrument={
        id:data.id,
        instrumentOption:data.instrumentOption,
    }

    return instrument;
}