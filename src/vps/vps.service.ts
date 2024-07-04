import { Injectable } from '@nestjs/common';
import { CreateVpDto } from './dto/create-vp.dto';
import { UpdateVpDto } from './dto/update-vp.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Vps } from './entities/vp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VpsService {
  constructor(
    @InjectRepository(Vps)
    private vpsRepository: Repository<Vps>,
) {}
  create(createVpDto: CreateVpDto) {
    return 'This action adds a new vp';
  }

  findAll() {
    return `This action returns all vps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vp`;
  }

  update(id: number, updateVpDto: UpdateVpDto) {
    return `This action updates a #${id} vp`;
  }

  remove(id: number) {
    return `This action removes a #${id} vp`;
  }

  async saveSystemInfo(systemInfo: any): Promise<Vps> {
    const vps = new Vps();
    vps.name = 'Your VPS Name'; // You can set this as needed
    vps.name_cpu = systemInfo.cpu.brand;
    vps.num_cores_in_use = systemInfo.cpu.cores.toString();
    vps.speed = systemInfo.cpu.speed.toString();
    vps.ipv4 = systemInfo.ipv4;
    vps.total_memory = systemInfo.memory.total.toString();
    vps.free_memory = systemInfo.memory.free.toString();
    vps.core = systemInfo.cpu.physicalCores.toString();
    vps.port = '3000'; // Set your port as needed

    return this.vpsRepository.save(vps);
}
}
