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
import { Songs } from "./Songs";

@Index("fk_questions_lessons1_idx", ["lessonsId"], {})
@Index("fk_questions_songs1_idx", ["songsId"], {})
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

  @Column("varchar", { name: "questionOptions", length: 300 })
  questionOptions: string;

  @Column("varchar", { name: "questionOptionCorrect", length: 100 })
  questionOptionCorrect: string;

  @Column("varchar", { name: "questionTemplate", length: 100 })
  questionTemplate: string;

  @Column("tinyint", { name: "isExplication", nullable: true })
  isExplication: number | null;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "lessons_id" })
  lessonsId: number;

  @Column("int", { name: "songs_id" })
  songsId: number;

  @ManyToOne(() => Lessons, (lessons) => lessons.questions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "lessons_id", referencedColumnName: "id" }])
  lessons: Lessons;

  @ManyToOne(() => Songs, (songs) => songs.questions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "songs_id", referencedColumnName: "id" }])
  songs: Songs;
}
