import{AppDataSource}from "../../../data-source";
import{Practice}from "../../../entities/Practice";

export const PracticeRepository=AppDataSource.getRepository(Practice);