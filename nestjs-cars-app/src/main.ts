import { ValidationPipe } from '@nestjs/common';
import { BaseExceptionFilter, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // create validation pipeline for entities
  app.useGlobalPipes(new ValidationPipe());
  //enable cros for jwt athorization
  app.enableCors();

  await app.listen(process.env.PORT || 9000);
}
bootstrap();



