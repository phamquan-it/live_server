import { Injectable } from '@nestjs/common';
import { CreateLogOrderDto } from './dto/create-log_order.dto';
import { UpdateLogOrderDto } from './dto/update-log_order.dto';

@Injectable()
export class LogOrderService {
  create(createLogOrderDto: CreateLogOrderDto) {
    return 'This action adds a new logOrder';
  }

  findAll() {
    return `This action returns all logOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logOrder`;
  }

  update(id: number, updateLogOrderDto: UpdateLogOrderDto) {
    return `This action updates a #${id} logOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} logOrder`;
  }
}
