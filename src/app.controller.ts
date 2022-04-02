import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { HeroLogic } from './hero.logic';
import { GetHeroDto } from './models/getHero.dto';
import { SendEmailDto } from './models/sendEmail.dto';

@Controller()
export class AppController {
  constructor(
    private readonly heroLogic: HeroLogic,
    private readonly appService: AppService,
  ) {}

  @Get()
  @HttpCode(200)
  getHero(@Query() request: GetHeroDto): any {
    return this.heroLogic.getHero(request);
  }

  @Post('email')
  @HttpCode(200)
  sendEmail(@Body() request: SendEmailDto): any {
    return this.appService.sendEmail(request);
  }
}
