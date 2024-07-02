import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Like, Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {}
  create(createOrderDto: CreateOrderDto) {
    return 'This action adds a new order';
  }

  async findAll(datafilter: any): Promise<any> {
    const data = await this.orderRepository.findAndCount({
      skip: !isNaN(datafilter.offset) ? datafilter.offset : 0,
      take: !isNaN(datafilter.limit) ? datafilter.limit : 0,
      where: { name: Like(`%${datafilter.search ?? ''}%`) },
    });
    return {
      data: data[0],
      total: data[1],
    };
  }
  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
