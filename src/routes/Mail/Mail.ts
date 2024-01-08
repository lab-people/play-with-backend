import {NextFunction, Request, Response} from "express";
import nodemailer from 'nodemailer';
import {senderInfo} from "../../config/senderInfo";
import {AuthMail} from "../../entities/authMail.entity";
import {AppDataSource} from "../../config/connect";
const authMailRepository = AppDataSource.getRepository(AuthMail);
/**
 * 회원가입 메일 발송
 * @param req
 * @param res
 * @param next
 */
export const sendJoinMail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body;
        let code = createCode();
        const serviceName = "잔디잔디";
        // 메일 제목
        const subject = '[' + serviceName + '] 회원가입 이메일 인증코드가 도착하였습니다. ';
        // 메일 내용
        const emailHtml = `<p>안녕하세요.</p>
        <p>` + serviceName + ` 인증 코드는 <strong>[` + code + `]</strong> 입니다.</p>`

        const authMail = new AuthMail();
        authMail.email = email;
        authMail.authNumber = code;
        authMail.cmplYn = false;
        await authMailRepository.save(authMail);

        await sendGmail(res, email, subject, emailHtml);
        res.status(200).json({message: "메일전송"});
    } catch (e) {

    }
}

/**
 * 팀초대 메일 발송
 * @param req
 * @param res
 * @param next
 */
export const sendInviteMail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {email} = req.body;
        const serviceName = "잔디잔디";
        // 메일 제목
        const subject = '[' + serviceName + '] 잔디잔디 팀 초대 메일이 도착하였습니다. ';
        // 메일 내용
        const emailHtml = `<p>안녕하세요.</p>
        <p>` + serviceName + ` 잔디잔디 팀에 합류해 주세요.</p>
        <bn/>
        <button>참여하기</button>
        `
        // TODO: 이메일 버튼 링크에 팀 참여 api 추가
        // TODO: 초대 이메일도 테이블로 관리, memberId랑 teamId 정보를 가지고 있어야 함
        sendGmail(res, email, subject, emailHtml);
        res.status(200).json({message: "메일전송"});
    } catch (e) {

    }
}

/**
 * 인증 메일 전송
 * @param res
 * @param toEmail
 */
const sendGmail = async (res: Response, toEmail: string, subject: string,emailHtml: string ) => {
    const smtpTransport = nodemailer.createTransport({
        service: 'gmail', // 사용할 메일 서비스
        auth: {
            user: senderInfo.user, // 메일 계정
            pass: senderInfo.pass, // 기기용 앱 비밀번호
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: senderInfo.user,
        to: toEmail,
        subject: subject,
        html: emailHtml,
    };
    await smtpTransport.sendMail(mailOptions, (error, responses) => {
        if (error) {
            res.status(400).json({ ok: false });
        } else {
            res.status(200).json({ ok: true });
        }
        smtpTransport.close();
    });
}

/**
 * 랜덤 코드 4자리 생성
 */
function createCode() {
    let randomCode = Math.floor(Math.random() * 10000);
    return randomCode.toString();
}