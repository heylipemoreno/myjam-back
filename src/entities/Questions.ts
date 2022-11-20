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

@Index("fk_questions_lessons1_idx", ["lessonsId"], {})
@Entity("questions", { schema: "myjam_database" })
export class Questions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("text", { name: "questionContent" })
  questionContent: string;

  @Column("varchar", { name: "questionAnswer", length: 100 })
  questionAnswer: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "lessons_id" })
  lessonsId: number;

  @ManyToOne(() => Lessons, (lessons) => lessons.questions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "lessons_id", referencedColumnName: "id" }])
  lessons: Lessons;
}
