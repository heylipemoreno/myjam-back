import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { SongsChords } from "../entities/SongsChords";
import { UsersLessons } from "../entities/UsersLessons";

export class RelacionsSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const usersLessonsRepository = dataSource.getRepository(UsersLessons)
        const songsChordsRepository = dataSource.getRepository(SongsChords)

        const usersLessonsData = [{
            id: 1,
            usersId: 1,
            lessonsId: 1,
            completedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
            points: 1000
        }, {
            id: 2,
            usersId: 1,
            lessonsId: 2,
            completedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
            points: 1000
        }, {
            id: 3,
            usersId: 2,
            lessonsId: 1,
            completedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
            points: 1000
        }, {
            id: 4,
            usersId: 3,
            lessonsId: 1,
            completedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
            points: 1000
        }, {
            id: 5,
            usersId: 3,
            lessonsId: 2,
            completedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
            points: 1000
        }, {
            id: 6,
            usersId: 3,
            lessonsId: 3,
            completedAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
            points: 1000
        }]
        const songsChordsData = [{
            id:1,
            songsId:1,
            chordsId:1
        },{
            id:2,
            songsId:1,
            chordsId:2
        },{
            id:3,
            songsId:1,
            chordsId:3
        },{
            id:4,
            songsId:1,
            chordsId:4
        }]

        for (let index = 0; index < usersLessonsData.length; index++) {
            const element = usersLessonsRepository.create(usersLessonsData[index]);
            await usersLessonsRepository.save(element)
        }

        for (let index = 0; index < songsChordsData.length; index++) {
            const element = songsChordsRepository.create(songsChordsData[index]);
            await songsChordsRepository.save(element)
        }
    }

}