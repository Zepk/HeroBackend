/* eslint-disable prettier/prettier */
import { HttpService, Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { HeroData } from './models/hero-data';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  
  public getHero(heroId: number): Observable<HeroData> {
    const apiKey = process.env.API_KEY;
    return this.httpService.get(
      `https://superheroapi.com/api/${apiKey}/${heroId}`,
    ).pipe(map(response => this.filterHeroData(response.data)));
  }

  private filterHeroData(data: any): HeroData {
    const { id, powerstats, image } = data;
    return {id, powerstats, image};
  }

}
