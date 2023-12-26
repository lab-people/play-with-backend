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
      length: 45,
    })
    description!: string;
    
    @Column({
      type: "varchar",
      name: " read_only_yn",
      comment: "읽기전용여부",
      length: 45,
    })
    readOnlyYn!: string;
  
    @CreateDateColumn({
        type: "timestamp",
        name: "created_dt",
        default: () => "CURRENT_TIMESTAMP(6)",
        comment: "생성일시",
      })
      createdDt!: Date;
      @Column({
          type: "varchar",
          name: "created_by",
          comment: "등록사용자",
          length: 45,
        })
        createdBy!: string;
      @CreateDateColumn({
        type: "timestamp",
        name: "updated_dt",
        default: () => "CURRENT_TIMESTAMP(6)",
        comment: "수정일시",
      })
      updatedDt!: Date;
      @Column({
          type: "varchar",
          name: "updated_by",
          comment: "수정사용자",
          length: 45,
        })
        updatedBy!: string;
  }
  