import { Test, TestingModule } from '@nestjs/testing';
import { LogOrderService } from './log_order.service';

describe('LogOrderService', () => {
  let service: LogOrderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogOrderService],
    }).compile();

    service = module.get<LogOrderService>(LogOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
