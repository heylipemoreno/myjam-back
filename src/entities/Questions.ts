import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lessons } from "./Lessons";

@Entity("questions", { schema: "api-desafiochefao-grupo2" })
export class Questions {
  @PrimaryGeneratedColumn({ type: "int", name: "questionId" })
  questionId: number;

  @Column("varchar", { name: "questionContent", nullable: true, length: 255 })
  questionContent: string | null;

  @OneToMany(() => Lessons, (lessons) => lessons.question)
  lessons: Lessons[];
}
