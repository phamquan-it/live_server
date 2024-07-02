import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MemoryVpsService } from './memory_vps.service';
import { CreateMemoryVpDto } from './dto/create-memory_vp.dto';
import { UpdateMemoryVpDto } from './dto/update-memory_vp.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('memory-vps')
export class MemoryVpsController {
  constructor(private readonly memoryVpsService: MemoryVpsService) {}

  // @Post()
  // create(@Body() createMemoryVpDto: CreateMemoryVpDto) {
  //   return this.memoryVpsService.create(createMemoryVpDto);
  // }

  // @Get()
  // findAll() {
  //   return this.memoryVpsService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.memoryVpsService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMemoryVpDto: UpdateMemoryVpDto) {
  //   return this.memoryVpsService.update(+id, updateMemoryVpDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.memoryVpsService.remove(+id);
  // }
}
