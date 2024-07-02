import { Test, TestingModule } from '@nestjs/testing';
import { MemoryVpsController } from './memory_vps.controller';
import { MemoryVpsService } from './memory_vps.service';

describe('MemoryVpsController', () => {
  let controller: MemoryVpsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MemoryVpsController],
      providers: [MemoryVpsService],
    }).compile();

    controller = module.get<MemoryVpsController>(MemoryVpsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
