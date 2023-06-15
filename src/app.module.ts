import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { MongooseModule } from '@nestjs/mongoose';

import { RolesGuard } from './roles/roles.guard';
import { AuthentificationController } from './authentification/authentification.controller';
import { AuthentificationModule } from './authentification/authentification.module';
import { ReservationModule } from './reservation/reservation.module';
import { FavouriteModule } from './favourites/fav.module';

@Module({
  imports: [UserModule,MongooseModule.forRoot('mongodb+srv://octavian:octavian@cluster0.e48z8u1.mongodb.net/?retryWrites=true&w=majority'), CarModule, AuthentificationModule,ReservationModule,FavouriteModule],
  controllers: [AppController, AuthentificationController],
  providers: [AppService,RolesGuard],
})
export class AppModule {}
