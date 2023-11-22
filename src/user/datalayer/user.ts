import { Prop , Schema ,SchemaFactory} from "@nestjs/mongoose";
import { StringExpressionOperatorReturningBoolean } from "mongoose";

export type userDocument = User & Document;

@Schema()
export class User{
    @Prop()
    firstName: string;
    @Prop()
    lastName: string;
    @Prop()
    email: string;
    @Prop()
    phoneNumber: string;
    @Prop()
    password: string;
    @Prop()
    userType: UserType;
    @Prop()
    address: string;
    @Prop()
    companyName: string;
    @Prop()
    description:string;
    @Prop()
    nrSellingCars: number;
    @Prop()
    country:string;
    @Prop()
    city:string;
    @Prop()
    zipcode:string;
    @Prop()
    avatar:string;
    @Prop()
    isVerified:boolean; 
    @Prop()
    license:string;



    @Prop()
    lang:number;
    @Prop()
    lat:number;
}
export const UserSchema = SchemaFactory.createForClass(User);
