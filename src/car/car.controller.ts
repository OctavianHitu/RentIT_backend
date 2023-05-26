
import { CarService } from './car.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CarDto } from 'src/dtos/carDto';

@Controller('car')
export class CarController {

constructor(private carService:CarService){}
@Get()
findAll() {
  return this.carService.findAll();
}
@Post()
createUser(@Body() carDto: CarDto) {
  return this.carService.createCar(carDto);
}
@Put('/:id')
updateUser(@Param('id') id: ObjectId, @Body() carDto: Partial<CarDto>) {
  return this.carService.updateCar(id, carDto);
}

@Delete('/:id')
deleteUser(@Param('id') id: ObjectId) {
  return this.carService.deleteCar(id);
}
}
