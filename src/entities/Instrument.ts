import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersQuestions } from "./UsersQuestions";

@Entity("instrument", { schema: "myjam_database" })
export class Instrument {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "instrumentOption", length: 100 })
  instrumentOption: string;

  @OneToMany(
    () => UsersQuestions,
    (usersQuestions) => usersQuestions.instrument
  )
  usersQuestions: UsersQuestions[];
}
