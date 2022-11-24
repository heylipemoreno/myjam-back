import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { Users } from "../entities/Users";
import bcrypt from 'bcryptjs'

export class UsersSeeder implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<any> {
        const usersRepository = dataSource.getRepository(Users)

        const usersData = [{
            id: 1,
            userName: "Victor",
            email: "victor@email.com",
            password: bcrypt.hashSync('myjam02', 10),
            questionsCompleted: 1
        }, {
            id: 2,
            userName: "Lorena",
            email: "lorena@email.com",
            password: bcrypt.hashSync('myjam02', 10),
            questionsCompleted: 1
        }, {
            id: 3,
            userName: "Felipe",
            email: "felipe@email.com",
            password: bcrypt.hashSync('myjam02', 10),
            questionsCompleted: 1
        }, {
            id: 4,
            userName: "Evanilson",
            email: "evanilson@email.com",
            password: bcrypt.hashSync('myjam02', 10),
            questionsCompleted: 1
        }, {
            id: 5,
            userName: "Eduardo",
            email: "eduardo@gmail.com",
            password: bcrypt.hashSync('myjam02', 10),
            questionsCompleted: 1
        }, {
            id: 6,
            userName: "Teste Completed",
            email: "testecompleto@gmail.com",
            password: bcrypt.hashSync('myjam02', 10),
            questionsCompleted: 1
        }, {
            id: 7,
            userName: "Teste Incompleto",
            email: "testeincompleto@gmail.com",
            password: bcrypt.hashSync('myjam02', 10),
            questionsCompleted: 0
        }]

        for (let index = 0; index < usersData.length; index++) {
            const newData = usersRepository.create(usersData[index]);
            await usersRepository.save(newData);

        }
    }

}