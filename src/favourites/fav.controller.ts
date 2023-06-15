import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { FacouriteService } from "./fav.service";
import { FavouritesDto } from "src/dtos/favDto";
import { ObjectId } from "mongoose";

@Controller('favourite')
export class FavouriteController{

    constructor(private favService: FacouriteService){}

    @Get()
    findAll(){
        return this.favService.findAll();
    }
    @Post()
    createFav(@Body() favDto: FavouritesDto) {
    return this.favService.createFav(favDto);
    }
    @Delete('/:id')
    deleteUser(@Param('id') id: ObjectId) {
    return this.favService.deleteFav(id);
    }


}