import { Injectable } from '@nestjs/common';
import { ReservationRepository } from './datalayer/reservation_repository';
import { CarRepository } from 'src/car/datalayer/car_repository';
import { ReservationDto } from 'src/dtos/reservationDto';
import { elementAt } from 'rxjs';
import { ObjectId } from 'mongoose';


@Injectable()
export class ReservationService{
    constructor(private reservationRepo:ReservationRepository){}

    findAll(){
        return this.reservationRepo.findAll();
    }

    async createReservation(resDto: ReservationDto){
        if (resDto.startDate >= resDto.endDate) {
            console.log(resDto.startDate)
            console.log(resDto.endDate)

            throw new Error('Invalid date input!');
        }


        const reservations = this.reservationRepo.findAll();

        (await reservations).forEach((elem)=>{
            if(elem.startDate<=resDto.startDate&&resDto.startDate<=elem.endDate){
                throw new Error('StartDate is in other person reservation!');
            }
            if(elem.startDate<=resDto.endDate&&resDto.endDate<=elem.endDate){
                throw new Error('EndDate is in other person reservation!');
            }
        })


        return this.reservationRepo.createReservation(resDto);

    }

    async deleteReservation(id:ObjectId){
        return this.reservationRepo.deteleReservation(id);
    }

    
}