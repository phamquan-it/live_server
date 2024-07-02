import { Controller, Get } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
@ApiBearerAuth()
@ApiTags("Fund")
@Controller('fund')
export class FundController {
    @Get("/info")
    info(){
        return "info";
    }

    @Get("/set-fund")
    setFund(){
        return "info";
    }

    @Get("/exchange-rate")
    exchangeRate(){
        return "info";
    }
}
