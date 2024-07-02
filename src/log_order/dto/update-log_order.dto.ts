import { PartialType } from '@nestjs/swagger';
import { CreateLogOrderDto } from './create-log_order.dto';

export class UpdateLogOrderDto extends PartialType(CreateLogOrderDto) {}
