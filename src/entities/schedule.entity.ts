import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity({ synchronize: false, schema: "play" })
  export class Schedule {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "일정아이디",
  })
  id!: number;

  @Column({
    type: "varchar",
    name: "title",
    comment: "제목",
    length: 200,
  })
  title!: string;

  @Column({
    type: "varchar",
    name: "period",
    comment: "기간",
    length: 45,
  })
  period!: string;

  @Column({
    type: "varchar",
    name: "spot",
    comment: "장소",
    length: 45,
  })
  spot!: string;

  @Column({
    type: "varchar",
    name: "description",
    comment: "설명",
    length: 45,
  })
  description!: string;

  @Column({
    type: "boolean",
    name: "open_yn",
    comment: "공개여부",
    length: 45,
  })
  openYn!: boolean;

  @Column({
    type: "varchar",
    name: "calendar_type",
    comment: "달력타입",
    length: 45,
  })
  calendarType!: string;

  @CreateDateColumn({
    type: "timestamp",
    name: "created_dt",
    default: () => "CURRENT_TIMESTAMP(6)",
    comment: "생성일시",
  })
  createdDt!: Date;

  @Column({
    type: "bigint",
    name: "created_by",
    comment: "등록사용자",
  })
  createdBy!: number;

  @CreateDateColumn({
    type: "timestamp",
    name: "updated_dt",
    default: () => "CURRENT_TIMESTAMP(6)",
    comment: "수정일시",
  })
  updatedDt!: Date;

  @Column({
    type: "bigint",
    name: "updated_by",
    comment: "수정사용자",
  })
  updatedBy!: number;
  }
  