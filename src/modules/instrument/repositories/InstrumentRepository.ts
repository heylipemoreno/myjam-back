import{AppDataSource}from "../../../data-source";
import{Instrument}from "../../../entities/Instrument";

export const InstrumentRepository=AppDataSource.getRepository(Instrument);