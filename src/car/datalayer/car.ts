import { Prop , Schema ,SchemaFactory} from "@nestjs/mongoose";
import  mongoose, { ObjectId } from "mongoose";
import { CarDetails } from "./CarDetails";
import { CarFeatures } from "./Carfeatures";

export type carDocument = Car & Document;

@Schema()
export class Car{
    @Prop()
    serialNumber:string;
    @Prop()
    brand:string;
    @Prop()
    price:number;
    @Prop()
    model:string;
    @Prop()
    images:string;
    @Prop()
    description:string;
    @Prop()
    carDetails:CarDetails;
    @Prop()
    carFeatures:CarFeatures;
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    owner:ObjectId;
    @Prop()
    country:string;
    @Prop()
    city:string;
    @Prop()
    address:string;
    @Prop()
    isVerified:boolean;
}
export const CarSchema = SchemaFactory.createForClass(Car);
