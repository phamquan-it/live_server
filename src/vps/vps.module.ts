import { Module } from '@nestjs/common';
import { VpsService } from './vps.service';
import { VpsController } from './vps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vps } from './entities/vp.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vps])
  ],
  controllers: [VpsController],
  providers: [VpsService],
})
export class VpsModule {}
