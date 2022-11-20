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
import { UsersClasses } from "./UsersClasses";
import { UsersGenres } from "./UsersGenres";
import { UsersQuestions } from "./UsersQuestions";

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

  @OneToMany(() => UsersChords, (usersChords) => usersChords.users)
  usersChords: UsersChords[];

  @OneToMany(() => UsersClasses, (usersClasses) => usersClasses.users)
  usersClasses: UsersClasses[];

  @OneToMany(() => UsersGenres, (usersGenres) => usersGenres.users)
  usersGenres: UsersGenres[];

  @OneToMany(() => UsersQuestions, (usersQuestions) => usersQuestions.users)
  usersQuestions: UsersQuestions[];
}
