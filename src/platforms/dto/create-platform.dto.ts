import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlatformDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  icon: any;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  // Add other fields and their validation decorators as necessary
}