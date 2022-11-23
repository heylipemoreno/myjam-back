import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersQuestions } from "./UsersQuestions";

@Entity("learn", { schema: "myjam_database" })
export class Learn {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "learnOption", length: 100 })
  learnOption: string;

  @OneToMany(() => UsersQuestions, (usersQuestions) => usersQuestions.learn)
  usersQuestions: UsersQuestions[];
}
