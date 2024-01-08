import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";

@Entity({ synchronize: false, schema: "play" })
export class User {
  @PrimaryGeneratedColumn({
    type: "bigint",
    name: "id",
    comment: "유저아이디",
  })
  id!: number;

  @Column({
    type: "varchar",
    name: "email",
    comment: "이메일",
    length: 45,
  })
  email!: string;

  @Column({
    type: "varchar",
    name: "password",
    comment: "비밀번호",
    length: 200,
  })
  password!: string;

  @Column("varchar", {
    name: "name",
    comment: "이름",
    length: 45,
  })
  name!: string;

  @Column({
    type: "varchar",
    name: "nick_name",
    comment: "닉네임",
    nullable: true,
    length: 45,
  })
  nickName!: string;

  @Column({
    type: "bigint",
    name: "team_id",
    comment: "팀 id",
  })
  groupId!: number;

  @Column({
    type: "bigint",
    name: "profile_img_file_id",
    comment: "프로필 이미지 파일 id",
    nullable: true,
  })
  profileImgFileId!: number;

  @Column("varchar", {
    name: "user_stts_cd",
    comment: "사용자 상태",
    length: 45,
    nullable: true,
  })
  userSttsCd!: string;

  @Column("varchar", {
    name: "stts_message",
    comment: "상태 메시지",
    length: 500,
    nullable: true,
  })
  sttsMessage!: string;

  @Column({
    type: "bigint",
    name: "dept_id",
    comment: "부서 id",
    nullable: true,
  })
  deptId!: number;


  @Column({
    type: "varchar",
    name: "position",
    comment: "직책",
    length: 50,
    nullable: true,
  })
  position!: string;

  @Column({
    type: "varchar",
    name: "birth",
    comment: "생년월일",
    length: 45,
    nullable: true,
  })
  birth!: string;

  @Column({
    type: "varchar",
    name: "phone",
    comment: "휴대폰번호",
    length: 45,
    nullable: true,
  })
  phone!: string;

  @Column({
    type: "varchar",
    name: "gender",
    comment: "성별",
    length: 45,
    nullable: true,
  })
  gender!: string;
  
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
