import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { FavouritesRepository } from './datalayer/favourite_repository';
import { FavouritesDto } from 'src/dtos/favDto';

@Injectable()
export class FacouriteService{
  constructor(private favRepo: FavouritesRepository) {}

  findAll() {
    return this.favRepo.findall();
  }

  async createFav(favDto: FavouritesDto){
    return this.favRepo.createFavourite(favDto);
  }

  deleteFav(id: ObjectId) {
    return this.favRepo.deleteFav(id);
  }

}