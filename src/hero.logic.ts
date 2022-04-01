import { Injectable } from '@nestjs/common';
import { AppService } from './app.service';
import { GetHeroDto } from './models/getHero.dto';

@Injectable()
export class HeroLogic {
  constructor(private readonly appService: AppService) {}

  public async getHero(request: GetHeroDto) {
    return this.appService.getHero(request.heroId);
  }
}
