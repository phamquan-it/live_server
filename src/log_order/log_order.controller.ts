import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogOrderService } from './log_order.service';


@Controller('log-order')
export class LogOrderController {
  constructor(private readonly logOrderService: LogOrderService) {}
}
