import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Genres } from "../entities/Genres";

export class GenresSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const genresRepository = dataSource.getRepository(Genres);

        const genresData = [{
            id: 1,
            genreName: "Rock"
        }, {
            id: 2,
            genreName: "Pop"
        }, {
            id: 3,
            genreName: "Música brasileira"
        }, {
            id: 4,
            genreName: "Jazz"
        }, {
            id: 5,
            genreName: "Blues"
        }]

        for (let index = 0; index < genresData.length; index++) {
            const newData = genresRepository.create(genresData[index]);
            await genresRepository.save(newData)

        }
    }

}