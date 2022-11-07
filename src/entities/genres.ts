import { Songs } from "./songs";
import { Users } from "./users";

import {
    PrimaryGeneratedColumn,
    Entity,
    JoinColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
    Column
} from "typeorm";

@Entity('genres')
export class Genres {
    @PrimaryGeneratedColumn()
    genreId: number;

    @Column()
    name: string;

    @ManyToMany(() => Users, users => users.genres)
    @JoinTable({
        name: 'users_genres',
        
        joinColumn: {
            name: 'genreId',
            referencedColumnName: 'genreId'
        },

        inverseJoinColumn: {
            name: 'userId',
            referencedColumnName: 'userId'
        }
    })
    users: Users[];
    
    @OneToMany(() => Songs, songs => songs.genreId)
    @JoinColumn({ name: 'songId' })
    songId: Songs[];
}
