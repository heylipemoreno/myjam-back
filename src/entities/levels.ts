import { Users } from "./users";

import {
    PrimaryColumn,
    Column,
    Entity,
    OneToMany,
    JoinColumn
} from "typeorm";

@Entity('levels')
export class Levels {
    @PrimaryColumn()
    levelId: number;

    @Column()
    totalPoints: number;

    @OneToMany(() => Users, users => users.levelId)
    @JoinColumn({ name: 'userId' })
    userId: Users[];
}
