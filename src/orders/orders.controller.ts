import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';


@ApiTags('Order')
@Controller('orders')
@ApiBearerAuth()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post("/check-add")
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Post("/add")
  add(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Get('/list')
  @ApiOperation({ summary: 'Get list category' })
  @ApiResponse({ status: 200, description: 'Returns all platforms.' })
  @ApiQuery({name: 'keyword', required: false})
  @ApiQuery({name: 'offset', required: false})
  @ApiQuery({name: 'limit', required: false})
  async findAll(
    @Query('language') language?: string,
    @Query('keyword') keyword?: string,
    @Query('offset') offset?: string,
    @Query('limit') limit?: string,
  ) {
    //list platform
    return this.ordersService.findAll({search: keyword,limit: parseInt(limit), offset: parseInt(offset)});
  }

  @Get('/list-service')
  listService() {
    return "list-service";
  }

  @Get('/info-order-monney')
  infoOrderMonney() {
    return "info-order-monney";
  }

  @Get('/statistical-overview')
  statisticalOrverview() {
    return "info-order-monney";
  }

  @Patch('/update-order')
  updateOrder(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }

 

  @Patch('/cancel-order/:id')
  remove(@Param('id') id: string) {
    return this.ordersService.remove(+id);
  }
  @Patch('update-one-order/:id')
  updateOneOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.ordersService.update(+id, updateOrderDto);
  }
}
