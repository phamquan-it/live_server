import { Controller, Get } from '@nestjs/common';
import { RolesService } from './roles.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Role')
@Controller('roles')
@ApiBearerAuth()
export class RolesController {
    constructor(private readonly rolesService: RolesService) {}
    @Get("list")
    list(){
        return this.rolesService.list()
    }
}
