import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Lessons } from "./Lessons";

@Index("fk_questions_lessons1_idx", ["lessonsId", "lessonsClassesId"], {})
@Entity("questions", { schema: "myjam-database" })
export class Questions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("text", { name: "questionContent", nullable: true })
  questionContent: string | null;

  @Column("datetime", { name: "completedAt", nullable: true })
  completedAt: Date | null;

  @Column("int", { primary: true, name: "lessons_id" })
  lessonsId: number;

  @Column("int", { primary: true, name: "lessons_classes_id" })
  lessonsClassesId: number;

  @ManyToOne(() => Lessons, (lessons) => lessons.questions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "lessons_id", referencedColumnName: "id" },
    { name: "lessons_classes_id", referencedColumnName: "classesId" },
  ])
  lessons: Lessons;
}
