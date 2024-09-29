import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Remplace par l'URL de ton front-end
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  });
  await app.listen(3000);
}
bootstrap();
