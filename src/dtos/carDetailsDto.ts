import { IsDate, IsHexColor, IsNumber } from "class-validator";

export class CarDetailsDto{

    carType:CarType;
    @IsDate()
    fabricationYear:Date;
    @IsNumber()
    doorNumber:number;
    @IsNumber()
    consumption:number;
    fuel:Fuel;
    @IsNumber()
    milageOnElectric:number;
    color:string;
    @IsNumber()
    numberOfSeats:number;
    @IsNumber()
    trunkCapacity:number;
    traction:TractionType;
    @IsNumber()
    power:number;
    @IsNumber()
    engineCapacity:number;
}