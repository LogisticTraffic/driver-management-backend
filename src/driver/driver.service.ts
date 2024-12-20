import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class DriverService {
  
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ) {}
  
  async create(createDriverDto: CreateDriverDto): Promise<Driver> {
    // Créer un nouvel objet Driver
    const newDriver = this.driverRepository.create(createDriverDto as unknown as DeepPartial<Driver>);
    
    // Enregistrer dans la base de données
    return await this.driverRepository.save(newDriver);
  }

  findOne(id: number) {
    return `This action returns a #${id} driver`;
  }
  findAll() {
    return `This action returns all`;
  }
  update(id: number, updateDriverDto: UpdateDriverDto) {
    return `This action updates a #${id} driver`;
  }

  remove(id: number) {
    return `This action removes a #${id} driver`;
  }
}
