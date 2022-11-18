import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Classes } from "./Classes";
import { Users } from "./Users";
import { Questions } from "./Questions";

@Index("fk_classes_has_users_users1_idx", ["usersId"], {})
@Index("fk_classes_has_users_classes1_idx", ["classesId"], {})
@Entity("lessons", { schema: "myjam-database" })
export class Lessons {
  @Column("int", { primary: true, name: "id" })
  id: number;

  @Column("int", { primary: true, name: "classes_id" })
  classesId: number;

  @Column("int", { primary: true, name: "users_id" })
  usersId: number;

  @Column("datetime", { name: "completedAt", nullable: true })
  completedAt: Date | null;

  @Column("int", { name: "points" })
  points: number;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @ManyToOne(() => Classes, (classes) => classes.lessons, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "classes_id", referencedColumnName: "id" }])
  classes: Classes;

  @ManyToOne(() => Users, (users) => users.lessons, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "users_id", referencedColumnName: "id" }])
  users: Users;

  @OneToMany(() => Questions, (questions) => questions.lessons)
  questions: Questions[];
}
