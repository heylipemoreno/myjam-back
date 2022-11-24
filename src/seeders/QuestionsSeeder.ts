import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Questions } from "../entities/Questions";

export class QuestionsSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const questionsRepository = dataSource.getRepository(Questions);

        const questionsData = [{
            id: 1,
            questionTitle: 'As partes do violão',
            questionImageLink: '',
            questionContent: `
            É o cabeçote. Nele ficam as tarraxas pra afinação e, além disso, faz parte da sustentação do braço. /
            Tarraxas: São as responsáveis pela afinação das cordas. /
            Casas: No violão, cada casa de cada corda é uma nota. Elas são divididas pelos trastes. Em alguns pontos elas são a mesma. Falamos disso depois. /
            Traste: Diferente dos da vida real, o traste do violão é responsável por dividir e sustentar as notas. /
            Todas essas partes juntas compõem o braço do violão.`,
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'introduction_1',
            isExplanation: 1,
            lessonsId: 1,
            songsId: 1
        }, {
            id: 2,
            questionTitle: 'Qual o nome desta parte?',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["Cabeçote","Braço","Tarraxa"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 1,
            songsId: 1
        }, {
            id: 3,
            questionTitle: 'Qual parte divide as notas e casas?',
            questionImageLink: null,
            questionContent: null,
            questionOptions: '["Traste","Cabeçote","Braço"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_noImage',
            isExplanation: 1,
            lessonsId: 1,
            songsId: 1
        }, {
            id: 4,
            questionTitle: 'Qual parte define as notas?',
            questionImageLink: null,
            questionContent: null,
            questionOptions: '["Casa","Traste","Braço"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_noImage',
            isExplanation: 1,
            lessonsId: 1,
            songsId: 1
        }, {
            id: 5,
            questionTitle: 'Qual parte está circulada?',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["Cabeçote","casa","Tarraxa"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 1,
            songsId: 1
        }, {
            id: 6,
            questionTitle: 'Contagem dos dedos',
            questionImageLink: '',
            questionContent: '',
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'introduction_2',
            isExplanation: 1,
            lessonsId: 2,
            songsId: 1
        }, {
            id: 7,
            questionTitle: 'Contagem das cordas',
            questionImageLink: '',
            questionContent: 'As cordas do violão são contadas de baixo pra cima. Da mais fina pra a mais grossa.',
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'introduction_2.1',
            isExplanation: 1,
            lessonsId: 2,
            songsId: 1
        }, {
            id: 8,
            questionTitle: 'Contagem das casas',
            questionImageLink: '',
            questionContent: '',
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'intoduction_2.2',
            isExplanation: 1,
            lessonsId: 2,
            songsId: 1
        }, {
            id: 9,
            questionTitle: 'Qual é esta casa?',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["1","4","5"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 2,
            songsId: 1
        }, {
            id: 10,
            questionTitle: 'Qual é está corda?',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["3","6","1"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 2,
            songsId: 1
        }, {
            id: 11,
            questionTitle: 'Qual dedo está na corda 2?',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["1","2","4"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 2,
            songsId: 1
        }, {
            id: 12,
            questionTitle: 'Como ler a tal da cifra?',
            questionImageLink: '',
            questionContent: '',
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'introduction_3',
            isExplanation: 1,
            lessonsId: 3,
            songsId: 1
        }, {
            id: 13,
            questionTitle: 'Qual a posição do dedo 2?',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["Corda 3, Casa 4" , "Corda 4, Casa 2" , "Corda 2, Casa 1"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 3,
            songsId: 1
        }, {
            id: 14,
            questionTitle: 'Quantos dedos são usados nesse acorde?',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["2" , "3" , "4]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 3,
            songsId: 1
        }, {
            id: 15,
            questionTitle: 'Qual é a casa em que ficam os dedos 2 e 3?',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["2" , "4" , "1"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 3,
            songsId: 1
        }, {
            id: 16,
            questionTitle: 'Qual corda você vai apertar com o dedo 1',
            questionImageLink: '',
            questionContent: null,
            questionOptions: '["3" , "2" , "3"]',
            questionOptionCorrect: '',
            questionTemplate: 'question_image',
            isExplanation: 1,
            lessonsId: 3,
            songsId: 1
        }, {
            id: 17,
            questionTitle: 'C (Dó Maior)',
            questionImageLink: '',
            questionContent: '["Pressione as cordas indicadas","Use o dedão como apoio pra reduzir o esforço"]',
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'lesson_chord',
            isExplanation: 0,
            lessonsId: 4,
            songsId: 1
        }, {
            id: 18,
            questionTitle: 'G (Sol Maior)',
            questionImageLink: '',
            questionContent: '["Pressione as cordas indicadas","Use o dedão como apoio pra reduzir o esforço"]',
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'lesson_chord',
            isExplanation: 0,
            lessonsId: 4,
            songsId: 1
        }, {
            id: 19,
            questionTitle: 'Am (Lá Menor)',
            questionImageLink: '',
            questionContent: '["Pressione as cordas indicadas","Use o dedão como apoio pra reduzir o esforço"]',
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'lesson_chord',
            isExplanation: 0,
            lessonsId: 4,
            songsId: 1
        }, {
            id: 20,
            questionTitle: 'F (Fá Menor)',
            questionImageLink: '',
            questionContent: '["Pressione as cordas indicadas","Use o dedão como apoio pra reduzir o esforço"]',
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'lesson_chord',
            isExplanation: 0,
            lessonsId: 4,
            songsId: 1
        }, {
            id: 21,
            questionTitle: 'Por onde andei - Nando Reis',
            questionImageLink: null,
            questionContent: null,
            questionOptions: '',
            questionOptionCorrect: '',
            questionTemplate: 'lesson_song',
            isExplanation: 0,
            lessonsId: 5,
            songsId: 1
        }]

        for (let index = 0; index < questionsData.length; index++) {
            const newData = questionsRepository.create(questionsData[index]);
            await questionsRepository.save(newData);
        }
    }

}