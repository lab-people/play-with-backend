import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
  @Entity({ synchronize: false, schema: "play" })
  export class TopicPostReply {
    @PrimaryGeneratedColumn({
      type: "bigint",
      name: "id",
      comment: "토픽게시글댓글아이디",
    })
    id!: number;
  
    @Column({
      type: "bigint",
      name: "topic_id",
      comment: "토픽id",
    })
    topicId!: number;

    @Column({
      type: "varchar",
      name: "contents",
      comment: "내용",
      length: 1000,
    })
    contents!: string;
  
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
  