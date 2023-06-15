import { FavouriteDocument, Favourites } from "./favourites";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { FavouritesDto } from "src/dtos/favDto";

@Injectable()
export class FavouritesRepository{

    constructor(@InjectModel(Favourites.name) private favModel: Model<FavouriteDocument>) {}

    async findall():Promise<Favourites[]>{
        return this.favModel.find().exec();
    } 

    async createFavourite(favDto:FavouritesDto):Promise<Favourites>{
        const newfav = new this.favModel(favDto);
        return newfav.save();
    }

    async deleteFav(id: ObjectId): Promise<Favourites> {
        return this.favModel.findOneAndDelete({ _id: id });
    }

}