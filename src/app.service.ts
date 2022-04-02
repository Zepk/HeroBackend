/* eslint-disable prettier/prettier */
import { HttpService, Injectable } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { HeroData } from './models/hero-data';
import { SendEmailDto } from './models/sendEmail.dto';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}
  
  public getHero(heroId: number): Observable<HeroData> {
    const apiKey = process.env.HERO_API_KEY;
    return this.httpService.get(
      `https://superheroapi.com/api/${apiKey}/${heroId}`,
    ).pipe(map(response => this.filterHeroData(response.data)));
  }

  private filterHeroData(data: any): HeroData {
    const { id, powerstats, image, name, biography } = data;
    const alignment = biography.alignment;
    return {id, powerstats, image, name, alignment};
  }

  public sendEmail(request: SendEmailDto) {
    const apiKey = process.env.MAILGUN_API_KEY;
    const domain = process.env.MAILGUN_DOMAIN;

    const mailgun = require('mailgun-js')({ domain, apiKey });

    mailgun.
      messages().
      send({
          from: `test@${domain}`,
          to: request.email,
          subject: request.subject,
          text: request.content
      }).
      then(res => res).
      catch(err => err);
      }

}
