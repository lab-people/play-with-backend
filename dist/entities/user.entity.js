"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const typeorm_1 = require("typeorm");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({
        type: "bigint",
        name: "id",
        comment: "유저아이디",
    }),
    __metadata("design:type", Number)
], User.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "email",
        comment: "이메일",
        length: 45,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "password",
        comment: "비밀번호",
        length: 45,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "name",
        comment: "이름",
        length: 45,
    }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "nick_name",
        comment: "닉네임",
        nullable: true,
        length: 45,
    }),
    __metadata("design:type", String)
], User.prototype, "nickName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        name: "team_id",
        comment: "팀 id",
    }),
    __metadata("design:type", Number)
], User.prototype, "groupId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        name: "profile_img_file_id",
        comment: "프로필 이미지 파일 id",
        nullable: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "profileImgFileId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "user_stts_cd",
        comment: "사용자 상태",
        length: 45,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "userSttsCd", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", {
        name: "stts_message",
        comment: "상태 메시지",
        length: 500,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "sttsMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        name: "dept_id",
        comment: "부서 id",
        nullable: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "deptId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "position",
        comment: "직책",
        length: 50,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "position", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "birth",
        comment: "생년월일",
        length: 45,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "birth", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "phone",
        comment: "휴대폰번호",
        length: 45,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        name: "gender",
        comment: "성별",
        length: 45,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        name: "created_by",
        comment: "등록사용자 id",
    }),
    __metadata("design:type", Number)
], User.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: "timestamp",
        name: "created_dt",
        default: () => "CURRENT_TIMESTAMP(6)",
        comment: "생성일시",
    }),
    __metadata("design:type", Date)
], User.prototype, "createdDt", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "bigint",
        name: "updated_by",
        comment: "수정사용자 id",
    }),
    __metadata("design:type", Number)
], User.prototype, "updatedBy", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: "timestamp",
        name: "updated_dt",
        default: () => "CURRENT_TIMESTAMP(6)",
        comment: "수정일시",
    }),
    __metadata("design:type", Date)
], User.prototype, "updatedDt", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ synchronize: true, schema: "play" })
], User);
