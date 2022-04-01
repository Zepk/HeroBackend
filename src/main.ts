/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  const corsAllowedOrigin = process.env.CORS_ALLOWED_ORIGIN;

  app.enableCors({
    origin: corsAllowedOrigin,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  });
  await app.listen(3000);
}
bootstrap();