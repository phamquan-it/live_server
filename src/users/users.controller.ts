import { Controller, Get, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBearerAuth, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('User')
@Controller('users')
@ApiBearerAuth()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/list')
  @ApiOperation({ summary: 'Get all users' })
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
    return this.usersService.findAll({search: keyword,limit: parseInt(limit), offset: parseInt(offset)});
  }

  @Patch("/update-status")
  async update_status(){
    return "Update status"
  }
  @Post("/forgot-password")
  async forgot_password(){
    return "forgot password"
  }
}
