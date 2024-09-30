import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  const config = new DocumentBuilder()
    .setTitle('TKORP Test API')
    .setDescription("Documentation de l'API du test technique")
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-doc', app, document);
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Remplace par l'URL de ton front-end
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  });
  await app.listen(3000);
}
bootstrap();
