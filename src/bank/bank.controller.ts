import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags("Bank")
@ApiBearerAuth()
@Controller('bank')
export class BankController {
    @Get()
    list(){
        return "list";
    }

    @Get("/info")
    info(){
        return "info bank payment"
    }
}
