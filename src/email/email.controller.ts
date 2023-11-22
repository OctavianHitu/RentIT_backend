import { Controller, Post, Body } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
interface dataEmailType{
  to: string; 
  subject: string; 
  text: string
}

@Controller('email')
export class EmailController {
  constructor(private readonly service: MailerService) {}

  @Post()
  async sendEmail(
    @Body() data: dataEmailType,
  ) {
    try {
      const { to, subject, text } = data;
      await this.service.sendMail({
        to,
        subject,
        text,
      })
      return { message: 'Email sent successfully!' };
    } catch (error) {
      console.error('Could not sent the email!');
      throw new Error('Could not sent the email!');
    }
}
}