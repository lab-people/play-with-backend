import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    Timestamp,
} from "typeorm";

@Entity({ synchronize: true, schema: "play" })
export class InviteMail {
    @PrimaryGeneratedColumn({
        type: "bigint",
        name: "id",
        comment: "초대메일id",
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
        type: "bigint",
        name: "teamId",
        comment: "팀id",
    })
    teamId!: number;

    @Column("boolean", {
        name: "cmplYn",
        comment: "가입여부",
    })
    cmplYn!: boolean;

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
