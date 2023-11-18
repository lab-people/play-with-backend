import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({ synchronize: false, schema:'play' })
export class User {
    @PrimaryGeneratedColumn({
        type: "bigint",
        name: "user_id",
        comment: "유저아이디",
    })
    userId!: number;

    @Column({
        type:"varchar",
        name: "nick_name",
        comment: "닉네임",
        length: 45,
    })
    nickName!: string;

    @Column({
        type:"varchar",
        name: "email",
        comment: "이메일",
        length: 45,
    })
    email!: string;
    
    @Column("varchar", {
        name: "name",
        comment: "",
        length: 45,
    })
    name!: string;

    @Column({
        type:"varchar",
        name: "password",
        comment: "",
        length: 45,
    })
    password!: string;

    @Column({
        type:"varchar",
        name: "birth",
        comment: "",
        length: 45,
    })
    birth!: string;

    @Column({
        type:"varchar",
        name: "gender",
        comment: "",
        length: 45,
    })
    gender!: string;

    @CreateDateColumn({
        type: "timestamp",
        name:"regDt",
        default: () => "CURRENT_TIMESTAMP(6)",
        comment: '생성일시'
    })
    regDt!: Date;

    @CreateDateColumn({
        type: "timestamp",
        name:"modDt",
        default: () => "CURRENT_TIMESTAMP(6)",
        comment: '생성일시'
    })
    modDt!: Date;    
}
