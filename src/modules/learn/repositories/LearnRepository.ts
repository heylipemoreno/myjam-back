import{AppDataSource}from "../../../data-source";
import{Learn}from "../../../entities/Learn";

export const LearnRepository=AppDataSource.getRepository(Learn);