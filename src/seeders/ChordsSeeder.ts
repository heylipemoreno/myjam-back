import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Chords } from "../entities/Chords";

export class ChordSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const chordRepository = dataSource.getRepository(Chords)

        const chordData = [{
            id: 1,
            chordName: 'C (Dó Maior)',
            chordImageLink: 'https://i.imgur.com/JFzAj59.png',
            chordSoundLink: 'https://d7d3471nr939s.cloudfront.net/PureAcousticGuitar_Noiiz/MP3/One+Shots/Acoustic+Guitar/C_add9StrumGuitar_01_526.mp3?cb=afb9abe4-05c9-439a-a501-785da02a0c8c'
        }, {
            id: 2,
            chordName: 'G (Sol Maior)',
            chordImageLink: 'https://i.imgur.com/Gd6H6Qv.png',
            chordSoundLink: 'https://d7d3471nr939s.cloudfront.net/PureAcousticGuitar_Noiiz/MP3/One+Shots/Acoustic+Guitar/C_add9StrumGuitar_01_526.mp3?cb=afb9abe4-05c9-439a-a501-785da02a0c8c'
        }, {
            id: 3,
            chordName: 'Am (Lá Menor)',
            chordImageLink: 'https://i.imgur.com/tf6YAD0.png',
            chordSoundLink: 'https://d7d3471nr939s.cloudfront.net/PureAcousticGuitar_Noiiz/MP3/One+Shots/Acoustic+Guitar/C_add9StrumGuitar_01_526.mp3?cb=afb9abe4-05c9-439a-a501-785da02a0c8c'
        }, {
            id: 4,
            chordName: 'F (Fá Maior)',
            chordImageLink: 'https://i.imgur.com/2KpXhDE.png',
            chordSoundLink: 'https://d7d3471nr939s.cloudfront.net/PureAcousticGuitar_Noiiz/MP3/One+Shots/Acoustic+Guitar/C_add9StrumGuitar_01_526.mp3?cb=afb9abe4-05c9-439a-a501-785da02a0c8c'
        }]

        for (let index = 0; index < chordData.length; index++) {
            const newData = chordRepository.create(chordData[index]);
            await chordRepository.save(newData);
        }
    }

}