import { Prop , Schema ,SchemaFactory} from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";


export type FavouriteDocument = Favourites & Document;

@Schema()
export class Favourites{

    @Prop({ type: mongoose.Schema.Types.ObjectId })
    carId:ObjectId;
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    favOwner:ObjectId;

}
export const FavouriteSchema= SchemaFactory.createForClass(Favourites);