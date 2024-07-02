import { Test, TestingModule } from '@nestjs/testing';
import { MemoryVpsService } from './memory_vps.service';

describe('MemoryVpsService', () => {
  let service: MemoryVpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoryVpsService],
    }).compile();

    service = module.get<MemoryVpsService>(MemoryVpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
