import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Platform } from 'src/platforms/entities/platform.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>,
  ) {}

  
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const { platformId, name } = createCategoryDto;
    const platform = await this.platformRepository.findOne({ where: { id: platformId } });
    if (!platform) {
      throw new NotFoundException('Platform not found');
    }

    const category = this.categoryRepository.create({
      name,
      platform,
    });

    return this.categoryRepository.save(category);
  }

  async findAll(datafilter: any): Promise<any> {
    const data = await this.categoryRepository.findAndCount({
      skip: !isNaN(datafilter.offset) ? datafilter.offset : 0,
      take: !isNaN(datafilter.limit) ? datafilter.limit : 0,
      where: { name: Like(`%${datafilter.search ?? ''}%`) },
    });
    return {
      data: data[0],
      total: data[1],
    };
  }

  findOne(id: number) {
    return this.categoryRepository.findOne({
      where: { id: id },
    });
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return this.categoryRepository.update(id, updateCategoryDto);
  }

  remove(id: number) {
    return this.categoryRepository.delete(id);
  }
}
