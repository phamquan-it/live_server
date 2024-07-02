import { Injectable } from '@nestjs/common';
import { CreateMemoryVpDto } from './dto/create-memory_vp.dto';
import { UpdateMemoryVpDto } from './dto/update-memory_vp.dto';

@Injectable()
export class MemoryVpsService {
  create(createMemoryVpDto: CreateMemoryVpDto) {
    return 'This action adds a new memoryVp';
  }

  findAll() {
    return `This action returns all memoryVps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} memoryVp`;
  }

  update(id: number, updateMemoryVpDto: UpdateMemoryVpDto) {
    return `This action updates a #${id} memoryVp`;
  }

  remove(id: number) {
    return `This action removes a #${id} memoryVp`;
  }
}
