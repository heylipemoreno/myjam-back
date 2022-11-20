import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Experience } from "./Experience";
import { Instrument } from "./Instrument";
import { Learn } from "./Learn";
import { Practice } from "./Practice";
import { Style } from "./Style";
import { Users } from "./Users";

@Index("fk_users_questions_practice1_idx", ["practiceId"], {})
@Index("fk_users_questions_instrument1_idx", ["instrumentId"], {})
@Index("fk_users_questions_experience1_idx", ["experienceId"], {})
@Index("fk_users_questions_users1_idx", ["usersId"], {})
@Index("fk_users_questions_style1_idx", ["styleId"], {})
@Index("fk_users_questions_learn1_idx", ["learnId"], {})
@Entity("users_questions", { schema: "myjam_database" })
export class UsersQuestions {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "instrument_id" })
  instrumentId: number;

  @Column("int", { name: "experience_id" })
  experienceId: number;

  @Column("int", { name: "practice_id" })
  practiceId: number;

  @Column("int", { name: "style_id" })
  styleId: number;

  @Column("int", { name: "learn_id" })
  learnId: number;

  @Column("int", { name: "users_id" })
  usersId: number;

  @ManyToOne(() => Experience, (experience) => experience.usersQuestions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "experience_id", referencedColumnName: "id" }])
  experience: Experience;

  @ManyToOne(() => Instrument, (instrument) => instrument.usersQuestions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "instrument_id", referencedColumnName: "id" }])
  instrument: Instrument;

  @ManyToOne(() => Learn, (learn) => learn.usersQuestions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "learn_id", referencedColumnName: "id" }])
  learn: Learn;

  @ManyToOne(() => Practice, (practice) => practice.usersQuestions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "practice_id", referencedColumnName: "id" }])
  practice: Practice;

  @ManyToOne(() => Style, (style) => style.usersQuestions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "style_id", referencedColumnName: "id" }])
  style: Style;

  @ManyToOne(() => Users, (users) => users.usersQuestions, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "users_id", referencedColumnName: "id" }])
  users: Users;
}
