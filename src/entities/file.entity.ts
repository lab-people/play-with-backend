import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

@Entity({ synchronize: false, schema: "play" })
export class File {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "id",
  })
  id!: number;

  @Column("varchar", {
    name: "name",
    comment: "파일명",
    length: 200,
  })
  name!: string;

  @Column("varchar", {
    name: "extension",
    comment: "확장자",
    length: 45,
  })
  extension!: string;

  @Column("varchar", {
    name: "path",
    comment: "경로",
    length: 500,
  })
  path!: string;

  @Column({
    type: "bigint",
    name: "created_by",
    comment: "등록사용자 id",
  })
  createdBy!: number;

  @CreateDateColumn({
    type: "timestamp",
    name: "created_dt",
    default: () => "CURRENT_TIMESTAMP(6)",
    comment: "생성일시",
  })
  createdDt!: Date;

  @Column({
    type: "bigint",
    name: "updated_by",
    comment: "수정사용자 id",
  })
  updatedBy!: number;

  @CreateDateColumn({
    type: "timestamp",
    name: "updated_dt",
    default: () => "CURRENT_TIMESTAMP(6)",
    comment: "수정일시",
  })
  updatedDt!: Date;
}
