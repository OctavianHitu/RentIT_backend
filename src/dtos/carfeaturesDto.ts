import { IsBoolean, IsNumber } from "class-validator";

export class CarFeaturesDto{

    connectivity:Connections;
    @IsBoolean()
    heatedSeats:boolean;
    @IsBoolean()
    gearboxIsManual:boolean;
    @IsBoolean()
    disabilityCar:boolean;
    @IsBoolean()
    ac: boolean;
    hasAirbags:boolean;
    @IsNumber()
    safetyrating:number;
    @IsBoolean()
    smokingVehicle:boolean;
    @IsBoolean()
    isofixForBaby:boolean;
    headlights:Headlights;
}