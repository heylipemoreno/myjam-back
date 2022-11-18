import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Classes } from "./Classes";
import { Questions } from "./Questions";

@Index("fk_lessons_classes1_idx", ["classesId"], {})
@Entity("lessons", { schema: "myjam-database" })
export class Lessons {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @Column("int", { name: "points", nullable: true })
  points: number | null;

  @Column("datetime", { name: "completedAt", nullable: true })
  completedAt: Date | null;

  @Column("int", { primary: true, name: "classes_id" })
  classesId: number;

  @ManyToOne(() => Classes, (classes) => classes.lessons, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "classes_id", referencedColumnName: "id" }])
  classes: Classes;

  @OneToMany(() => Questions, (questions) => questions.lessons)
  questions: Questions[];
}
