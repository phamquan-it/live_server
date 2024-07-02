import { Module } from '@nestjs/common';
import { LogOrderService } from './log_order.service';
import { LogOrderController } from './log_order.controller';

@Module({
  controllers: [LogOrderController],
  providers: [LogOrderService],
})
export class LogOrderModule {}
