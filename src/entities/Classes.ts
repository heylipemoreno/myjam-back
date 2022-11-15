import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToMany,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
  import { Chords } from "./Chords";
  import { Songs } from "./Songs";
  import { Lessons } from "./Lessons";
  
  @Index("fk_classes_songs1_idx", ["classId", "songId"], {})
  @Entity("classes", { schema: "api-desafiochefao-grupo2" })
  export class Classes {
    @PrimaryGeneratedColumn({ type: "int", name: "classId" })
    classId: number;
  
    @Column("int", { primary: true, name: "songId" })
    songId: number;
  
    @Column("varchar", { name: "classVideoLink", nullable: true, length: 255 })
    classVideoLink: string | null;
  
    @ManyToMany(() => Chords, (chords) => chords.classes)
    chords: Chords[];
  
    @OneToOne(() => Songs, (songs) => songs.classes, {
      onDelete: "NO ACTION",
      onUpdate: "NO ACTION",
    })
    @JoinColumn([
      { name: "songId", referencedColumnName: "songId" },
      { name: "classId", referencedColumnName: "classId" },
    ])
    songs: Songs;
  
    @OneToMany(() => Lessons, (lessons) => lessons.classes)
    lessons: Lessons[];
  }
  