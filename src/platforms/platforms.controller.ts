import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Query } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { ApiBody, ApiConsumes, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Public } from 'src/auth/decorators/public.decorator';
@ApiTags('Platform')
@Public()
@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

 
  @Post('create')
  @ApiOperation({ summary: 'Create a platform' })
  @ApiResponse({ status: 201, description: 'Platform created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreatePlatformDto })
  @UseInterceptors(FileInterceptor('icon'))
  async create(@UploadedFile() file, @Body() createPlatformDto: CreatePlatformDto) {
    // Handle the creation logic here
    return this.platformsService.create(createPlatformDto, file);
  }

  @Get('/list')
  @ApiOperation({ summary: 'Get all platforms' })
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
    return this.platformsService.findAll({search: keyword,limit: parseInt(limit), offset: parseInt(offset)});
  }
  @Get('/detail/:id')
  findOne(@Param('id') id: string) {
    return this.platformsService.findOne(+id);
  }

  @Patch('/update/:id')
  update(@Param('id') id: string, @Body() updatePlatformDto: UpdatePlatformDto) {
    return this.platformsService.update(+id, updatePlatformDto);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.platformsService.remove(+id);
  }
}
