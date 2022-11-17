import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Classes } from "./Classes";
import { Users } from "./Users";
import { Questions } from "./Questions";

@Index("fk_classes_has_users_classes1_idx", ["classesId"], {})
@Index("fk_classes_has_users_users1_idx", ["usersId"], {})
@Index("fk_lessons_questions1_idx", ["questionsId"], {})
@Entity("lessons", { schema: "api-desafiochefao-grupo2" })
export class Lessons {
  @Column("varchar", { primary: true, name: "id", length: 45 })
  id: number;

  @Column("int", { primary: true, name: "classes_id" })
  classesId: number;

  @Column("int", { primary: true, name: "users_id" })
  usersId: number;

  @Column("datetime", { name: "completedAt", nullable: true })
  completedAt: Date | null;

  @Column("int", { name: "points" })
  points: number;

  @Column("int", { primary: true, name: "questions_id" })
  questionsId: number;

  @Column("datetime", { name: "createdAt", default: () => 'NOW()' })
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

  @ManyToOne(() => Questions, (questions) => questions.lessons, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "questions_id", referencedColumnName: "id" }])
  questions: Questions;
}
