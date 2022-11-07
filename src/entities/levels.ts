import { Users } from "./users";
import { Songs } from "./songs";

import {
    PrimaryColumn,
    Column,
    Entity,
    OneToMany,
    JoinColumn
} from "typeorm";

@Entity('levels')
export class Levels {
    @PrimaryColumn({ unique: true })
    levelId: number;

    @Column({ unique: true })
    levelPoints: number;

    @Column()
    totalPoints: number;

    @OneToMany(() => Users, users => users.levelId)
    @JoinColumn({ name: 'userId' })
    userId: Users[];

    @OneToMany(() => Songs, songs => songs.levelId)
    @JoinColumn({ name: 'songId' })
    songId: Songs[];
}
