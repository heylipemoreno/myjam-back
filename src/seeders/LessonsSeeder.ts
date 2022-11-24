import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Lessons } from "../entities/Lessons";

export class LessonsSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const lessonsRepository = dataSource.getRepository(Lessons);

        const lessonData = [{
            id: 1,
            lessonName: "Violão 1",
            lessonImageLink: ""
        }, {
            id: 2,
            lessonName: "Violão 2",
            lessonImageLink: ""
        }, {
            id: 3,
            lessonName: "Violão 3",
            lessonImageLink: ""
        }, {
            id: 4,
            lessonName: "Violão 4",
            lessonImageLink: ""
        }, {
            id: 5,
            lessonName: "Violão 5",
            lessonImageLink: ""
        }]

        for (let index = 0; index < lessonData.length; index++) {
            const newData = lessonsRepository.create(lessonData[index]);
            await lessonsRepository.save(newData)
        }
    }
}