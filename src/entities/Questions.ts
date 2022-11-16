import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lessons } from "./Lessons";

@Entity("questions", { schema: "api-desafiochefao-grupo2" })
export class Questions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "questionContent", nullable: true, length: 255 })
  questionContent: string | null;

  @Column("datetime", { name: "createdAt" })
  createdAt: Date;
  default: "now()";

  @Column("datetime", { name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => Lessons, (lessons) => lessons.questions)
  lessons: Lessons[];
}
