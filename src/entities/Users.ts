import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UsersChords } from "./UsersChords";
import { UsersLessons } from "./UsersLessons";
import { UsersQuestions } from "./UsersQuestions";
import { UsersSongs } from "./UsersSongs";

@Index("email_UNIQUE", ["email"], { unique: true })
@Entity("users", { schema: "myjam_database" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "userName", length: 100 })
  userName: string;

  @Column("varchar", { name: "email", unique: true, length: 150 })
  email: string;

  @Column("varchar", { name: "password", length: 100 })
  password: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @Column("int", { name: "totalPoints", nullable: true, default: () => "'0'" })
  totalPoints: number | null;

  @Column("int", { name: "qtdSongs", nullable: true, default: () => "'0'" })
  qtdSongs: number | null;

  @Column("int", { name: "qtdChords", nullable: true, default: () => "'0'" })
  qtdChords: number | null;

  @Column("tinyint", { name: "questionsCompleted", default: () => "'0'" })
  questionsCompleted: number;

  @OneToMany(() => UsersChords, (usersChords) => usersChords.users)
  usersChords: UsersChords[];

  @OneToMany(() => UsersLessons, (usersLessons) => usersLessons.users)
  usersLessons: UsersLessons[];

  @OneToMany(() => UsersQuestions, (usersQuestions) => usersQuestions.users)
  usersQuestions: UsersQuestions[];

  @OneToMany(() => UsersSongs, (usersSongs) => usersSongs.users)
  usersSongs: UsersSongs[];
}
