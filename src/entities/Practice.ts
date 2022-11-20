import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersQuestions } from "./UsersQuestions";

@Entity("practice", { schema: "myjam_database" })
export class Practice {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "practiceOption", length: 100 })
  practiceOption: string;

  @OneToMany(() => UsersQuestions, (usersQuestions) => usersQuestions.practice)
  usersQuestions: UsersQuestions[];
}
