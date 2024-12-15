"use strict";
import {promises as fs} from "fs";
import {SMTPClient, Message} from "emailjs";
import config from "../config.js";
import serviceApi from "./serviceAPI.js";

const domain = config.mail.domain.origin;
/*
* https://bfban.com/
*/

const sender = {}
Object.keys(config.mail).forEach(key => {
    const mail = config.mail[key]
    sender[key] = new SMTPClient({
        user: mail.user,
        password: mail.password,
        host: mail.host,
        port: mail.port,
        ssl: mail.secure,
        tls: mail.tls
    })
})

// Use Default SMTP Server To Send Mail
async function sendMail(content, from, to, cc, subject, attachment = undefined, language) {
    const message = new Message({
        text: content,
        from: from,
        to: to,
        cc: cc,
        subject: subject,
        attachment: attachment
    });
    return await sender[language].sendAsync(message);
}


// /** 此函数用于使用Microsoft进行发件(Microsoft E5或其他专业版本)
//  * @param {string} content
//  * @param {'Text'|'HTML'} type
//  * @param {string} from
//  * @param {string} to
//  * @param {string} subject
//  */
// async function sendMail_ms(content, type, from, to, subject) {
//     return await serviceApi('msGraphAPI', '/sendMail').post({
//         data: {
//             subject,
//             type,
//             content,
//             from,
//             to
//         }
//     });
// }


async function sendRegisterVerify(username, originName, address, language, code) {
    let subject = {
        'zh-CN': 'BFBAN注册',
        'en-US': 'BFBAN Registration',
    }[language];
    subject = subject ? subject : 'BFBAN Registration';
    const html = await fs.readFile(`./media/mail_register_${language}.html`).then(buf => buf.toString());
    const origin = new URL(domain).origin;

    await sendMail(
        "Hello " + username + "!\n" +
        "   You are now signing up for BFBAN as " + originName + " in game.\n" +
        "   Pease click the link below to complete your registration: \n" +
        "       " + origin + "/signupComplete?code=" + code + "&lang=" + language,
        '"BFBAN Account Service" <no-reply@bfban.com>', address, '', subject, [
            {
                data: html
                    .replace(/\$\{username\}/g, username)
                    .replace(/\$\{originName\}/g, originName)
                    .replaceAll(/\$\{website\}/g, origin)
                    .replace(/\$\{code\}/g, code),
                alternative: true
            }
        ],
        language
    );
}

async function sendForgetPasswordVerify(username, address, language, code) {
    let subject = {
        'zh-CN': 'BFBan密码重置',
        'en-US': 'BFBan Password Reset',
    }[language];
    subject = subject ? subject : 'BFBan Password Reset';
    const html = await fs.readFile(`./media/mail_forgetPasswordVerify_${language}.html`).then(buf => buf.toString());
    const origin = new URL(domain).origin;

    await sendMail(
        "Hello " + username + "!\n" +
        "   You are now reseting your password for bfban.com.\n" +
        "   Please click the link below to reset your password: \n" +
        "       " + origin + "/forgetPasswordVerify?code=" + code,
        '"BFBAN Account Service" <no-reply@bfban.com>', address, '', subject, [
            {
                data: html
                    .replace(/\$\{username\}/g, username)
                    .replaceAll(/\$\{website\}/g, origin)
                    .replace(/\$\{code\}/g, code),
                alternative: true
            }
        ],
        language
    );
}

async function sendBindingOriginVerify(username, address, language, code) {
    let subject = {
        'zh-CN': 'BFBan账户绑定',
        'en-US': 'BFBan - Connecting your e-mail address',
    }[language];
    subject = subject ? subject : 'BFBan - Connecting your e-mail address';
    const html = await fs.readFile(`./media/mail_bindEmail_${language}.html`).then(buf => buf.toString());
    const origin = new URL(domain).origin;

    await sendMail(
        "Hello " + username + "!\n" +
        "   You are now binding this email to your bfban.com account.\n" +
        "   Please click the link below to finish the verification: \n" +
        "       " + origin + "/bindOrigin?code=" + code,
        '"BFBAN Account Service" <no-reply@bfban.com>', address, '', subject, [
            {
                data: html
                    .replace(/\$\{username\}/g, username)
                    .replaceAll(/\$\{website\}/g, origin)
                    .replace(/\$\{code\}/g, code),
                alternative: true
            }
        ],
        language
    );
}

async function sendUserAuthVerify(username, address, appname, appid, language, code) {
    let subject = {
        'zh-CN': 'BFBan应用授权',
        'en-US': 'BFBan Application authorization',
    }[language];
    subject = subject ? subject : 'BFBan Application authorization';
    const html = await fs.readFile(`./media/mail_userAuth_${language}.html`).then(buf => buf.toString());
    const origin = new URL(domain).origin;

    await sendMail(
        "Hello " + username + "!\n",
        '"BFBAN Auth App Service" <no-reply@bfban.com>', address, '', subject, [
            {
                data: html
                    .replace(/\$\{username\}/g, username)
                    .replace(/\$\{appname\}/g, appname)
                    .replace(/\$\{appid\}/g, appid)
                    .replaceAll(/\$\{website\}/g, origin)
                    .replaceAll(/\$\{code\}/g, code),
                alternative: true
            }
        ],
        language
    );
}

export {
    sendMail,
    sendRegisterVerify,
    sendForgetPasswordVerify,
    sendBindingOriginVerify,
    sendUserAuthVerify
}
