import{AppDataSource}from "../../../data-source";
import{Style}from "../../../entities/Style";

export const StyleRepository=AppDataSource.getRepository(Style);