import { IsString } from "class-validator";

export class FavouritesDto{

    @IsString()
    carId:string;
    @IsString()
    favOwner:string;
}