import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { Car, CarSchema } from './datalayer/car';
import { CarRepository } from './datalayer/car_repository';

@Module({
  controllers: [CarController],
  providers: [CarService,CarRepository,CarModule],
  imports:[MongooseModule.forFeature([{name:Car.name,schema:CarSchema}])]

})
export class CarModule {}
