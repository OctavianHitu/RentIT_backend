import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReservationService } from './reservation.service';
import { ReservationDto } from 'src/dtos/reservationDto';
import { ObjectId } from 'mongoose';


@Controller('reservation')
export class ReservationController{
    constructor(private reservationService: ReservationService) {}

    @Get()
    getAllReservations(){
        return this.reservationService.findAll();
    }

    @Post()
    createReservation(@Body() resDto: ReservationDto){
        return this.reservationService.createReservation(resDto);
    }

    @Delete('/:id')
    deleteReservation(@Param('id') id: ObjectId){
        return this.reservationService.deleteReservation(id);
    }

    


}