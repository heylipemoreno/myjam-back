import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Lessons } from "../entities/Lessons";

export class LessonsSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const lessonsRepository = dataSource.getRepository(Lessons);

        const lessonData = [{
            id: 1,
            lessonName: "Violão 1",
            lessonImageLink: "https://i.imgur.com/QzyeK9g.png"
        }, {
            id: 2,
            lessonName: "Violão 2",
            lessonImageLink: "https://i.imgur.com/QzyeK9g.png"
        }, {
            id: 3,
            lessonName: "Violão 3",
            lessonImageLink: "https://i.imgur.com/QzyeK9g.png"
        }, {
            id: 4,
            lessonName: "Violão 4",
            lessonImageLink: "https://i.imgur.com/QzyeK9g.png"
        }, {
            id: 5,
            lessonName: "Violão 5",
            lessonImageLink: "https://i.imgur.com/QzyeK9g.png"
        }]

        for (let index = 0; index < lessonData.length; index++) {
            const newData = lessonsRepository.create(lessonData[index]);
            await lessonsRepository.save(newData)
        }
    }
}