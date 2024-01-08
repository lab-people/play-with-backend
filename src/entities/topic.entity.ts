import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

@Entity({ synchronize: false, schema: "play" })
export class Topic {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "id",
  })
  id!: number;

  @Column("varchar", {
    name: "name",
    comment: "토픽명",
    length: 200,
  })
  name!: string;

  @Column("varchar", {
    name: "description",
    comment: "설명",
    length: 500,
  })
  description!: string;

  @Column("bigint", {
    name: "folder_id",
    comment: "폴더 id",
  })
  folderId!: number;

  @Column("boolean", {
    name: "open_yn",
    comment: "공개여부"
  })
  openYn!: boolean;

  @Column("boolean", {
    name: "quite_out_yn",
    comment: "조용히나가기여부"
  })
  quiteOutYn!: boolean;

  @Column("boolean", {
    name: "auto_invite_yn",
    comment: "정회원자동초대여부"
  })
  autoInviteYn!: boolean;

  @Column("boolean", {
    name: "read_only_yn",
    comment: "읽기전용여부"
  })
  readOnlyYn!: boolean;

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
