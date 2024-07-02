import { Test, TestingModule } from '@nestjs/testing';
import { LogOrderController } from './log_order.controller';
import { LogOrderService } from './log_order.service';

describe('LogOrderController', () => {
  let controller: LogOrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogOrderController],
      providers: [LogOrderService],
    }).compile();

    controller = module.get<LogOrderController>(LogOrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
