import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Classes } from "./Classes";
import { Questions } from "./Questions";

@Entity("lessons", { schema: "myjam_database" })
export class Lessons {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "lessonName", length: 100 })
  lessonName: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => Classes, (classes) => classes.lessons)
  classes: Classes[];

  @OneToMany(() => Questions, (questions) => questions.lessons)
  questions: Questions[];
}
