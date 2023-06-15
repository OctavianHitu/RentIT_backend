import { Module } from "@nestjs/common";
import { FavouriteController } from "./fav.controller";
import { FacouriteService } from "./fav.service";
import { FavouritesRepository } from "./datalayer/favourite_repository";
import { MongooseModule } from "@nestjs/mongoose";
import { FavouriteSchema, Favourites } from "./datalayer/favourites";


@Module({
    controllers: [FavouriteController],
    providers: [FacouriteService,FavouritesRepository,FavouriteModule],
    imports:[MongooseModule.forFeature([{name:Favourites.name,schema:FavouriteSchema}])],
    exports:[FacouriteService]
  
  })
  export class FavouriteModule {}