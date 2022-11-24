import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Chords } from "../entities/Chords";

export class ChordSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const chordRepository = dataSource.getRepository(Chords)

        const chordData = [{
            id: 1,
            chordName: 'C (Dó Maior)',
            chordImageLink: '',
            chordSoundLink: ''
        }, {
            id: 2,
            chordName: 'G (Sol Maior)',
            chordImageLink: '',
            chordSoundLink: ''
        }, {
            id: 3,
            chordName: 'Am (Lá Menor)',
            chordImageLink: '',
            chordSoundLink: ''
        }, {
            id: 4,
            chordName: 'F (Fá Maior)',
            chordImageLink: '',
            chordSoundLink: ''
        }]

        for (let index = 0; index < chordData.length; index++) {
            const newData = chordRepository.create(chordData[index]);
            await chordRepository.save(newData);
        }
    }

}