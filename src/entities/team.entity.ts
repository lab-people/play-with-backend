import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

@Entity({ synchronize: true, schema: "play" })
export class Team {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "id",
  })
  id!: number;

  @Column("varchar", {
    name: "name",
    comment: "팀명",
    length: 45,
  })
  name!: string;

  @Column("varchar", {
    name: "domain",
    comment: "도메인",
    length: 250,
  })
  domain!: string;


  @Column({
    type: "varchar",
    name: "root_email",
    comment: "관리자 이메일",
    length: 45,
  })
  rootEmail!: string;


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
