import { Module } from '@nestjs/common';
import { MemoryVpsService } from './memory_vps.service';
import { MemoryVpsController } from './memory_vps.controller';

@Module({
  controllers: [MemoryVpsController],
  providers: [MemoryVpsService],
})
export class MemoryVpsModule {}
