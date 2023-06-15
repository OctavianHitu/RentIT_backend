
import { CarService } from './car.service';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { query } from 'express';
import { ObjectId } from 'mongoose';
import { CarDto } from 'src/dtos/carDto';

@Controller('car')
export class CarController {

constructor(private carService:CarService){}
@Get()
findAll() {
  return this.carService.findAll();
}


// {brand:"Audi",'carFeatures.connectivity':"androidAuto"}
// @Get()
// findAllQuery(@Query() query) { 

//   const obj:any={};
//   if(query.brand){
//     obj.brand=query.brand;
//   }

//   if (query.minPrice !== undefined&&query.maxPrice !== undefined) {
//     obj.price = { $gte: query.minPrice, $lte: query.maxPrice };
//   }else if (query.minPrice !== undefined) {
//     obj.price = { $gte: query.minPrice };
//   } else if (query.maxPrice !== undefined) {
//     obj.price = { $lte: query.maxPrice };
//   }

//   if(query.connectivity){
//     obj['carFeatures.connectivity']=query.connectivity;
//   }
//   console.log(obj)
  
//   return this.carService.findAll1(obj);
// }


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
