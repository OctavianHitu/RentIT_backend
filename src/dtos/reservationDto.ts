import { IsDate, IsNotEmpty } from "class-validator";
import { ObjectId } from "mongoose";

export class ReservationDto{

    @IsNotEmpty()
    userId:ObjectId;
    @IsNotEmpty()
    ownerOfcar: ObjectId;
    @IsNotEmpty()
    carId: ObjectId;
    @IsDate()
    startDate: Date;
    @IsDate()
    endDate: Date;


}