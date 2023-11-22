import { IsString } from "class-validator";
import { ObjectId } from "mongoose";
import { CarDetailsDto } from "./carDetailsDto";
import { CarFeaturesDto } from "./carfeaturesDto";

export class CarDto{
    @IsString()
    serialNumber:string;
    @IsString()
    brand:string;
    price:number;
    @IsString()
    model:string;
    images:string;
    @IsString()
    description:string;
    carDetails:CarDetailsDto;
    carFeatures:CarFeaturesDto;
    owner:ObjectId;
    country:string;
    city:string;
    address:string;
    isVerified:boolean;
}