import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { EventPattern } from '@nestjs/microservices';

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  getHello(): string {
    return this.appService.getHello();
  }
 
}
