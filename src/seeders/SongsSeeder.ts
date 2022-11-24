import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Songs } from "../entities/Songs";

export class SongsSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const songsRepository = dataSource.getRepository(Songs);

        const songsData = [{
            id: 1,
            songName: 'Por onde andei - Nando Reis',
            songLink: '',
            songContent: '',
        }]

        for (let index = 0; index < songsData.length; index++) {
            const newData = songsRepository.create(songsData[index]);
            await songsRepository.save(newData)
        }
    }

}