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
    musicTypeId: number;

    @Column({ unique: true })
    userMusicType: string;

    @ManyToMany(() => Users, users => users.musicTypeId)
    @JoinTable({
        name: 'profiles',
        
        joinColumn: {
            name: 'musicTypeId',
            referencedColumnName: 'musicTypeId'
            
        },

        inverseJoinColumn: {
            name: 'userId',
            referencedColumnName: 'userId'
        }
    })
    userId: Users[];
    
    @OneToMany(() => Songs, songs => songs.musicTypeId)
    @JoinColumn({ name: 'songId' })
    songId: Songs[];
}
