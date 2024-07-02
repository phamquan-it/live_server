import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiBearerAuth()
@ApiTags("Log")
@Controller('log')
export class LogController {
    @Get()
    list(){
        return {
            data: []
        }
    }
}
