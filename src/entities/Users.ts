import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Lessons } from "./Lessons";
import { UsersChords } from "./UsersChords";
import { Genres } from "./Genres";

@Index("nickname_UNIQUE", ["nickname"], { unique: true })
@Index("email_UNIQUE", ["email"], { unique: true })
@Entity("users", { schema: "myjam-database" })
export class Users {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "userName", length: 70 })
  userName: string;

  @Column("varchar", { name: "nickname", unique: true, length: 20 })
  nickname: string;

  @Column("varchar", { name: "email", unique: true, length: 70 })
  email: string;

  @Column("varchar", { name: "password", length: 20 })
  password: string;

  @Column("int", { name: "age", nullable: true })
  age: number | null;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt", nullable: true })
  updatedAt: Date | null;

  @Column("int", { name: "totalPoints" })
  totalPoints: number;

  @Column("int", { name: "qtdSongs", nullable: true })
  qtdSongs: number | null;

  @Column("int", { name: "qtdChords", nullable: true })
  qtdChords: number | null;

  @OneToMany(() => Lessons, (lessons) => lessons.users)
  lessons: Lessons[];

  @OneToMany(() => UsersChords, (usersChords) => usersChords.users)
  usersChords: UsersChords[];

  @ManyToMany(() => Genres, (genres) => genres.users)
  genres: Genres[];
}
