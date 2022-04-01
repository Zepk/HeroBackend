/* eslint-disable prettier/prettier */
import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  
  public async getHero(heroId: number): Promise<any> {
    const apiKey = process.env.API_KEY;
    return this.httpService.get(
      `https://superheroapi.com/api/${apiKey}/${heroId}`,
    ).pipe(map(response => response.data));
  }
}
