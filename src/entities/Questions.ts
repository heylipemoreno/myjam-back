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

  @Column("varchar", { name: "questionTitle", length: 100 })
  questionTitle: string;

  @Column("varchar", { name: "questionImageLink", nullable: true, length: 300 })
  questionImageLink: string | null;

  @Column("text", { name: "questionContent", nullable: true })
  questionContent: string | null;

  @Column("varchar", { name: "questionOptions", nullable: true, length: 300 })
  questionOptions: string | null;

  @Column("varchar", {
    name: "questionOptionCorrect",
    nullable: true,
    length: 100,
  })
  questionOptionCorrect: string | null;

  @Column("varchar", { name: "questionTemplate", length: 100 })
  questionTemplate: string;

  @Column("tinyint", { name: "isExplanation" })
  isExplanation: number;

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
