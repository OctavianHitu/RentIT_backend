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
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from './email/email.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com', // Update with your SMTP server\
        port: 465,
        secure: true,
        auth: {
          user: 'rentit.web.company@gmail.com', // Update with your email address
          pass: 'pgxunrtkayxfzxxv', // Update with your email password
        },
      },
    }),
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://octavian:octavian@cluster0.e48z8u1.mongodb.net/?retryWrites=true&w=majority',
    ),
    CarModule,
    AuthentificationModule,
    ReservationModule,
    FavouriteModule,
  ],
  controllers: [AppController, AuthentificationController,EmailController],
  providers: [AppService, RolesGuard],
})
export class AppModule {}
