import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { PlatformsModule } from 'src/platforms/platforms.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Category]),
    PlatformsModule
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
