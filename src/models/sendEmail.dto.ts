import { IsEmail, IsNotEmpty } from 'class-validator';

export class SendEmailDto {
  @IsNotEmpty()
  public subject: string;

  @IsNotEmpty()
  public content: string;

  @IsNotEmpty()
  @IsEmail()
  public email: string;
}
