/* eslint-disable prettier/prettier */
import { HttpModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroLogic } from './hero.logic';
import { ConfigModule } from '@nestjs/config';

@Module({
  // Can change this for aditional environments
  imports: [ConfigModule.forRoot({ envFilePath: `local.env` }), HttpModule],
  controllers: [AppController],
  providers: [AppService, HeroLogic],
})
export class AppModule {}
