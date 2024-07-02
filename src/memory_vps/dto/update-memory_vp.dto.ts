import { PartialType } from '@nestjs/swagger';
import { CreateMemoryVpDto } from './create-memory_vp.dto';

export class UpdateMemoryVpDto extends PartialType(CreateMemoryVpDto) {}
