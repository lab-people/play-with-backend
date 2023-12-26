import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";

  @Entity({ synchronize: false, schema: "play" })
  export class Color {
    @PrimaryGeneratedColumn({
      type: "bigint",
      name: "id",
      comment: "색상아이디",
    })
    id!: number;

    @Column({
      type: "varchar",
      name: "color_cd",
      comment: "색상타입",
      length: 45,
    })
    colorCd!: string;

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
  