import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from "typeorm";
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from './seeders/MainSeeder';

const port = process.env.DB_PORT as number | undefined

const options: DataSourceOptions & SeederOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    seeds: [MainSeeder]
}

export const AppDataSource = new DataSource(options)

if (process.env.NODE_ENV === 'production') {
    Object.assign(
        AppDataSource,
        {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        }
    )
}