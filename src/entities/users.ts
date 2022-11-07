import { Levels } from "./levels";
import { Genres } from "./genres";

import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    ManyToMany,
    JoinTable
} from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    name: string;

    @Column({ unique: true })
    nickname: string;

    @Column({ unique: true })
    email: string;

    @Column()  
    password: string;

    @Column({ nullable: true })
    age: number;

    @Column({ nullable: true })
    experience: number;

    @ManyToMany(() => Genres, genres => genres.users)
    @JoinTable({
        name: 'users_genres',
        
        joinColumn: {
            name: 'userId',
            referencedColumnName: 'userId'
        },

        inverseJoinColumn: {
            name: 'genreId',
            referencedColumnName: 'genreId'
        }
    })
    genres: Genres[];

    @ManyToOne(() => Levels, levels => levels.userId)
    @JoinColumn({ name: 'levelId' })
    levelId: Levels[];
}
