import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Experience } from "../entities/Experience";
import { Instrument } from "../entities/Instrument";
import { Learn } from "../entities/Learn";
import { Practice } from "../entities/Practice";
import { Style } from "../entities/Style";

export class QuestionsOnboardingSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {

        //Repositórios
        const instrumentRepository = dataSource.getRepository(Instrument);
        const experienceRepository = dataSource.getRepository(Experience);
        const practiceRepository = dataSource.getRepository(Practice);
        const styleRepository = dataSource.getRepository(Style);
        const learnRepository = dataSource.getRepository(Learn);

        //Seeders
        const instrumentData = [{
            id: 1,
            instrumentOption: "Violão"
        }, {
            id: 2,
            instrumentOption: "Guitarra"
        }, {
            id: 3,
            instrumentOption: "Baixo"
        }, {
            id: 4,
            instrumentOption: "Teclado"
        }, {
            id: 5,
            instrumentOption: "Bateria"
        }]

        const experienceData = [{
            id: 1,
            experienceOption: "Nenhuma"
        }, {
            id: 2,
            experienceOption: "Alguma experiência"
        }]

        const practiceData = [{
            id: 1,
            practiceOption: "10 minutos ao dia"
        }, {
            id: 2,
            practiceOption: "20 minutos ao dia"
        }, {
            id: 3,
            practiceOption: "30 minutos ao dia"
        }, {
            id: 4,
            practiceOption: "1 hora por dia"
        }]

        const styleData = [{
            id: 1,
            styleOption: "Rock"
        }, {
            id: 2,
            styleOption: "Pop"
        }, {
            id: 3,
            styleOption: "Música brasileira"
        }, {
            id: 4,
            styleOption: "Jazz"
        }, {
            id: 5,
            styleOption: "Blues"
        }]

        const learnData = [{
            id: 1,
            learnOption: "Aprender o básico"
        }, {
            id: 2,
            learnOption: "Tocar as músicas que gosto"
        }, {
            id: 3,
            learnOption: "Tocar em eventos"
        }, {
            id: 4,
            learnOption: "O máximo possível"
        }]


        //Implementação
        ;
        for (let index = 0; index < instrumentData.length; index++) {
            const newData = instrumentRepository.create(instrumentData[index]);
            await instrumentRepository.save(newData)
        }
        for (let index = 0; index < experienceData.length; index++) {
            const newData = experienceRepository.create(experienceData[index]);
            await experienceRepository.save(newData)
        }
        for (let index = 0; index < practiceData.length; index++) {
            const newData = practiceRepository.create(practiceData[index]);
            await practiceRepository.save(newData)
        }
        for (let index = 0; index < styleData.length; index++) {
            const newData = styleRepository.create(styleData[index]);
            await styleRepository.save(newData)
        }
        for (let index = 0; index < learnData.length; index++) {
            const newData = learnRepository.create(learnData[index]);
            await learnRepository.save(newData)
        }

    }

}