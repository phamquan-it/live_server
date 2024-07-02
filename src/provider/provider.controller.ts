import { Controller, Get, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiTags("Provider")
@ApiBearerAuth()
@Controller('provider')
export class ProviderController {
    @Get('/list')
    list(){
        return "list"
    }

    @Post("update-status")
    updateStatus(){
        return "update-status"
    }
}
