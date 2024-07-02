import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ServiceService } from './service.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.serviceService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.serviceService.findAll();
  }

  @Get("/list-public")
  list_public() {
    return this.serviceService.findAll();
  }

  @Get('/detail/:id')
  findOne(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Get('/detail-public/:id')
  serviceDetailPublic(@Param('id') id: string) {
    return this.serviceService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  
  @Patch('/set-ratio/:id')
  setRatio(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.serviceService.update(+id, updateServiceDto);
  }

  @Get('/statistics')
  statistics() {
    return "statistic"
  }

  @Get('/list-ratio-service-user')
  listRatioServer() {
    return "/list-ratio-service-user"
  }
}
