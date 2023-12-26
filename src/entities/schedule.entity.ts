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
      length: 45,
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
      type: "varchar",
      name: "open_tf",
      comment: "공개여부",
      length: 45,
    })
    openTf!: string;

    @Column({
      type: "varchar",
      name: "celandar_type",
      comment: "달력타입",
      length: 45,
    })
    celandarType!: string;
  
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
  