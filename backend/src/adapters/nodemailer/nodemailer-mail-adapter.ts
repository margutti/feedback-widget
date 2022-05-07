import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "d9dff017e411f7",
      pass: "c414856277c47d"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Sergio Margutti <margutti@softmidia.com.br>',
            subject,
            html: body,
        });
    };
}