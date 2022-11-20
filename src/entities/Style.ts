import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersQuestions } from "./UsersQuestions";

@Entity("style", { schema: "myjam_database" })
export class Style {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "styleOption", length: 100 })
  styleOption: string;

  @OneToMany(() => UsersQuestions, (usersQuestions) => usersQuestions.style)
  usersQuestions: UsersQuestions[];
}
