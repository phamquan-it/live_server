import { Test, TestingModule } from '@nestjs/testing';
import { PaymentOptionController } from './payment_option.controller';

describe('PaymentOptionController', () => {
  let controller: PaymentOptionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentOptionController],
    }).compile();

    controller = module.get<PaymentOptionController>(PaymentOptionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
