import { Injectable } from '@nestjs/common';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { Platform } from './entities/platform.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectRepository(Platform)
    private platformRepository: Repository<Platform>,
  ) {}
  async create(createPlatformDto: CreatePlatformDto, icon: Express.Multer.File): Promise<Platform> {
    createPlatformDto.icon = icon.path;
    const platform = this.platformRepository.create(createPlatformDto);

    return this.platformRepository.save(platform);
  }

  async findAll(datafilter:any): Promise<any> {
   
    const data = await this.platformRepository.findAndCount({
      skip:!isNaN(datafilter.offset)? datafilter.offset: 0,
      take:!isNaN(datafilter.limit)? datafilter.limit: 0,
      where: {name: Like(`%${datafilter.search??''}%`)}
    })
    return {
      data: data[0],
      total: data[1]
    }
  }

  async findOne(id: number) {
    return await this.platformRepository.findOne({ 
      where: {id: id},
      relations: ['categories']
     });
  }

  update(id: number, updatePlatformDto: UpdatePlatformDto) {
    return `This action updates a #${id} platform`;
  }

  async remove(id: number) {
    return await this.platformRepository.delete(id)
  }
}
