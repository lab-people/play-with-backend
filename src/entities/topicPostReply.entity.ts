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
      type: "varchar",
      name: "topic_id",
      comment: "토픽id",
      length: 45,
    })
    topicId!: string;

    @Column({
      type: "varchar",
      name: "contents",
      comment: "내용",
      length: 45,
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
  