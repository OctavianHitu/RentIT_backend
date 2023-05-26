import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type CarFeaturesDocument =CarFeatures & Document;
@Schema()
export class CarFeatures{
    @Prop()
    connectivity:Connections;
    @Prop()
    heatedSeats:boolean;
    @Prop()
    gearboxIsManual:boolean;
    @Prop()
    disabilityCar:boolean;
    @Prop()
    ac: boolean;
    @Prop()
    hasAirbags:boolean;
    @Prop()
    safetyrating:number;
    @Prop()
    smokingVehicle:boolean;
    @Prop()
    isofixForBaby:boolean;
    @Prop()
    headlights:Headlights;
}

export const CarFeaturesSchema= SchemaFactory.createForClass(CarFeatures)
