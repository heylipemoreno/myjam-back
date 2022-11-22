import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Questions } from "./Questions";
import { UsersLessons } from "./UsersLessons";

@Entity("lessons", { schema: "myjam_database" })
export class Lessons {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "lessonName", length: 100 })
  lessonName: string;

  @Column("varchar", { name: "lessonImageLink", length: 300 })
  lessonImageLink: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => Questions, (questions) => questions.lessons)
  questions: Questions[];

  @OneToMany(() => UsersLessons, (usersLessons) => usersLessons.lessons)
  usersLessons: UsersLessons[];
}
