import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { LoggerService } from './logger.service';
import { RolesModule } from './roles/roles.module';
import { UserStatusModule } from './user_status/user_status.module';
import { OrdersModule } from './orders/orders.module';
import { OrderStatusModule } from './order_status/order_status.module';
import { PlatformsModule } from './platforms/platforms.module';
import { CategoryModule } from './category/category.module';
import { ServiceModule } from './service/service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DBHOST'),
        port: +configService.get('DBPORT'),
        username: configService.get('DBUSERNAME'),
        password: configService.get('DBPASSWORD'),
        database: configService.get('DBNAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    UserStatusModule,
    OrdersModule,
    OrderStatusModule,
    PlatformsModule,
    CategoryModule,
    ServiceModule
  ],
  controllers: [AppController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
