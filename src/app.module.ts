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
import { VpsModule } from './vps/vps.module';
import { MemoryVpsModule } from './memory_vps/memory_vps.module';
import { LinksModule } from './links/links.module';
import { LogOrderModule } from './log_order/log_order.module';
import { PaymentModule } from './payment/payment.module';
import { DiscountModule } from './discount/discount.module';
import { FundController } from './fund/fund.controller';
import { BankController } from './bank/bank.controller';
import { PaymentOptionController } from './payment_option/payment_option.controller';
import { LogController } from './log/log.controller';
import { ProviderController } from './provider/provider.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: 'D:\\live_server\\uploads',
     // rootPath: join(__dirname, '..', 'uploads'), // Path to your static files
      serveRoot: '/images', // The URL path to serve static files from
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
        timezone:  "+07:00"
      }),
      inject: [ConfigService],
    }),
    
    AuthModule,
    RolesModule,
    UserStatusModule,
    OrdersModule,
    OrderStatusModule,
    PlatformsModule,
    CategoryModule,
    ServiceModule,
    VpsModule,
    MemoryVpsModule,
    LinksModule,
    LogOrderModule,
    PaymentModule,
    UsersModule,
    DiscountModule
  ],
  controllers: [AppController, FundController, BankController, PaymentOptionController, LogController, ProviderController],
  providers: [AppService, LoggerService],
})
export class AppModule {}
