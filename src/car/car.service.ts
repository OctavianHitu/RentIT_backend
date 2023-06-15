import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CarDto } from 'src/dtos/carDto';
import { CarRepository } from './datalayer/car_repository';

@Injectable()
export class CarService {
    constructor(private carRepo: CarRepository) {}

    findAll() {
      return this.carRepo.findAll();
    }
  
    async createCar(carDto: CarDto) {
      return this.carRepo.createCar(carDto);
    }
    deleteCar(id: ObjectId) {
      return this.carRepo.deleteCar(id);
    }
  
    async updateCar(id: ObjectId, carDto: Partial<CarDto>) {
      return this.carRepo.updateCar(id, carDto);
    }

    findAll1(q:any) {
      return this.carRepo.findAll1(q);
    }

}
