import { Injectable } from "@nestjs/common";
import { Reservation, ReservationDocument } from "./Reservation";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from 'mongoose';
import { ReservationDto } from "src/dtos/reservationDto";


@Injectable()
export class ReservationRepository{
    constructor(@InjectModel(Reservation.name) private reservationModel: Model<ReservationDocument>){}


    async findAll(): Promise<Reservation[]> {
        return this.reservationModel.find().exec();
    }

    async createReservation(reservationDto: ReservationDto):Promise<Reservation>
    {
        const res =new this.reservationModel(reservationDto);
        return res.save();
    }

    async updateReservation(id: ObjectId, resdto: Partial<ReservationDto>):Promise<Reservation>{
        return this.reservationModel.findOneAndUpdate({_id:id},resdto,{new:true});
    }

    async deteleReservation(id:ObjectId):Promise<Reservation>{
        return this.reservationModel.findOneAndDelete({_id:id});
    }
    async deteleReservationByCarId(id:ObjectId):Promise<Reservation>{
        return this.reservationModel.findOneAndDelete({carId:id});
    }


    

}