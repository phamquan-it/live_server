import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerService } from './logger.service'; // Import LoggerService
import { ConfigService } from '@nestjs/config';
import { initializeTransactionalContext } from 'typeorm-transactional';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);
  const logger = app.get(LoggerService); // Retrieve LoggerService instance
  const configService = app.get(ConfigService);
  const port = configService.get<number>('APPPORT') || 3032;


  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '192.168.1.37',
      port: 3301,
    },
  });

  await app.startAllMicroservices().then(() => {
    logger.log('Microservice running at: '+new Date().toString());
  });
  const options = new DocumentBuilder()
    .setTitle('Live_server')
    .setDescription('The live API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(port).then(() => {
    logger.log('Application running at: '+new Date().toString());
  });
}
bootstrap();
