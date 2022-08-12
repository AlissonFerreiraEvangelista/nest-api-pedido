import { NestFactory } from '@nestjs/core';
import { ApiInternalServerErrorResponse, DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { TestScheduler } from 'rxjs/testing';
import { URL } from 'url';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Pedido')
    .setDescription('API construida com base na atividade de sala de aula')
    .setContact('Alisson','https://github.com/AlissonFerreiraEvangelista','alisson.225592gmail.com')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
