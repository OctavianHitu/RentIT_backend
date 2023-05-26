import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export type CarDetailsDocument =CarDetails & Document;

@Schema()
export class CarDetails{
    @Prop()
    carType:CarType;
    @Prop()
    fabricationYear:Date;
    @Prop()
    doorNumber:number;
    @Prop()
    consumption:number;
    @Prop()
    fuel:Fuel;
    @Prop()
    milageOnElectric:number;
    @Prop()
    color:string;
    @Prop()
    numberOfSeats:number;
    @Prop()
    trunkCapacity:number;
    @Prop()
    traction:TractionType;
    @Prop()
    power:number;
    @Prop()
    engineCapacity:number;
}


export const CarDetailsSchema= SchemaFactory.createForClass(CarDetails)
