import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Platform } from 'src/platforms/entities/platform.entity';
import { User as UserRepository } from './entities/user.entity';
import { Like, Repository } from 'typeorm';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: Repository<UserRepository>,
  ) {}
  private readonly users = [
    {
      userId: 1,
      username: 'guess',
      password: 'guess',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  async findAll(datafilter:any): Promise<any> {
    const data = await this.userRepository.findAndCount({
      skip:!isNaN(datafilter.offset)? datafilter.offset: 0,
      take:!isNaN(datafilter.limit)? datafilter.limit: 0,
      where: {name: Like(`%${datafilter.search??''}%`)}
    })
    return {
      data: data[0],
      total: data[1]
    }
  }


  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} service`;
  }
}
