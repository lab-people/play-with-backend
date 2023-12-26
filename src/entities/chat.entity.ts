import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Timestamp,
  } from "typeorm";
  
  @Entity({ synchronize: false, schema: "play" })
  export class Chat {
    @PrimaryGeneratedColumn({
      type: "bigint",
      name: "id",
      comment: "채팅아이디",
    })
    id!: number;
  
    @Column({
      type: "varchar",
      name: "name",
      comment: "이름",
      length: 45,
    })
    name!: string;
  
    @Column({
      type: "varchar",
      name: "description",
      comment: "설명",
      length: 200,
    })
    description!: string;
    
    @Column({
      type: "boolean",
      name: " read_only_yn",
      comment: "읽기전용여부",
    })
    readOnlyYn!: boolean;
  
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
  