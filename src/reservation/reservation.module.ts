import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { ReservationRepository } from './datalayer/reservation_repository';
import { Reservation, ReservationSchema } from './datalayer/Reservation';

@Module({
    controllers: [ReservationController],
    providers: [ReservationService,ReservationRepository,ReservationModule],
    imports:[MongooseModule.forFeature([{name :Reservation.name,schema:ReservationSchema}])]
  
  })
  export class ReservationModule {}