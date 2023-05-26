import { IsString, IsEmail, IsPhoneNumber, IsNotEmpty, IsNumber } from 'class-validator';
export class CreateUserDto{
    @IsString()
    firstName: string;
    @IsString()
    lastName: string;
    @IsEmail()
    email: string;
    @IsPhoneNumber()
    phoneNumber: string;
    @IsString()
    password: string;
    @IsNotEmpty()
    userType: UserType;
    @IsString()
    country:string;
    @IsString()
    city:string;
    @IsString()
    address: string;
    @IsString()
    companyName: string;
 
    description:string;
    @IsNumber()
    nrSellingCars: number;

    zipcode:string;
    avatar:Buffer;
    lang:number;
    lat:number;
}


