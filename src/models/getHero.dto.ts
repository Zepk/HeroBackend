import { IsNotEmpty } from 'class-validator';

export class GetHeroDto {
  @IsNotEmpty()
  public heroId: number;
}
