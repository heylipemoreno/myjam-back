import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SongsChords } from "./SongsChords";
import { UsersChords } from "./UsersChords";

@Entity("chords", { schema: "myjam_database" })
export class Chords {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "chordName", length: 60 })
  chordName: string;

  @Column("varchar", { name: "chordImageLink", length: 300 })
  chordImageLink: string;

  @Column("varchar", { name: "chordSoundLink", length: 300 })
  chordSoundLink: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => SongsChords, (songsChords) => songsChords.chords)
  songsChords: SongsChords[];

  @OneToMany(() => UsersChords, (usersChords) => usersChords.chords)
  usersChords: UsersChords[];
}
