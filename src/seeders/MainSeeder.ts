import { DataSource } from "typeorm";
import { runSeeder, Seeder, SeederFactoryManager } from "typeorm-extension";
import { ChordSeeder } from "./ChordsSeeder";
import { GenresSeeder } from "./GenresSeeder";
import { LessonsSeeder } from "./LessonsSeeder";
import { QuestionsOnboardingSeeder } from "./QuestionsOnboardingSeeder";
import { QuestionsSeeder } from "./QuestionsSeeder";
import { SongsSeeder } from "./SongsSeeder";
import { UsersSeeder } from "./UsersSeeder";

export class MainSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        await runSeeder(dataSource, QuestionsOnboardingSeeder);
        await runSeeder(dataSource, ChordSeeder);
        await runSeeder(dataSource, LessonsSeeder);
        await runSeeder(dataSource, SongsSeeder);
        await runSeeder(dataSource, GenresSeeder);
        await runSeeder(dataSource, UsersSeeder);
        await runSeeder(dataSource, QuestionsSeeder);
    }

}