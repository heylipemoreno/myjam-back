import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersQuestions } from "./UsersQuestions";

@Entity("instrument", { schema: "myjam_database" })
export class Instrument {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "instrumentOption", length: 100 })
  instrumentOption: string;

  @Column("varchar", { name: "instrumentImageLink", length: 300 })
  instrumentImageLink: string;

  @Column("varchar", { name: "instrumentHoverImageLink", length: 300 })
  instrumentHoverImageLink: string;

  @OneToMany(
    () => UsersQuestions,
    (usersQuestions) => usersQuestions.instrument
  )
  usersQuestions: UsersQuestions[];
}
