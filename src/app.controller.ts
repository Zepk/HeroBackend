import { Controller, Get, Query } from '@nestjs/common';
import { HeroLogic } from './hero.logic';
import { GetHeroDto } from './models/getHero.dto';

@Controller()
export class AppController {
  constructor(private readonly heroLogic: HeroLogic) {}

  @Get()
  getHero(@Query() request: GetHeroDto): any {
    return this.heroLogic.getHero(request);
  }
}
