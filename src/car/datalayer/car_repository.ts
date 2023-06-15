import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CarDto } from 'src/dtos/carDto';
import { Car, carDocument } from './car';

@Injectable()
export class CarRepository {
  constructor(@InjectModel(Car.name) private carModel: Model<carDocument>) {}

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }
  async  createCar(carDto:CarDto):Promise<Car>{
    if ((await this.carModel.findOne({ serialNumber: carDto.serialNumber }).exec()) === null) {
        const newCar = new this.carModel(carDto);
        return newCar.save();
      } else {
        throw new Error('This serial number exist in database!');
      }
 }    
 async updateCar(id: ObjectId, carDto: Partial<CarDto>): Promise<Car> {
    return this.carModel.findOneAndUpdate({ _id: id }, carDto, { new: true });
}
async deleteCar(id: ObjectId): Promise<Car> {
    return this.carModel.findOneAndDelete({ _id: id });
  }





  async findAll1(query:any): Promise<Car[]> {
    
      return this.carModel.find(query).exec();
    
  }
}
