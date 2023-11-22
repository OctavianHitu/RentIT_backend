import { Prop , Schema ,SchemaFactory} from "@nestjs/mongoose";
import mongoose, { ObjectId } from "mongoose";


export type ReservationDocument = Reservation &Document;

@Schema()
export class Reservation{
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    userId:ObjectId;
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    ownerOfcar: ObjectId;
    @Prop({ type: mongoose.Schema.Types.ObjectId })
    carId: ObjectId;
    @Prop()
    startDate: Date;
    @Prop()
    endDate: Date;
}

export const ReservationSchema = SchemaFactory.createForClass(Reservation)
