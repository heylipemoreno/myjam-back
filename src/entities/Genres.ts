import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GenresSongs } from "./GenresSongs";

@Entity("genres", { schema: "myjam_database" })
export class Genres {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "genreName", length: 60 })
  genreName: string;

  @CreateDateColumn({ name: "createdAt" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updatedAt" })
  updatedAt: Date;

  @OneToMany(() => GenresSongs, (genresSongs) => genresSongs.genres)
  genresSongs: GenresSongs[];
}
