import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersQuestions } from "./UsersQuestions";

@Entity("experience", { schema: "myjam_database" })
export class Experience {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "experienceOption", length: 100 })
  experienceOption: string;

  @OneToMany(
    () => UsersQuestions,
    (usersQuestions) => usersQuestions.experience
  )
  usersQuestions: UsersQuestions[];
}
