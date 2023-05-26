import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthentificationService } from './authentification.service';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthentificationController } from './authentification.controller';
import * as dotenv from 'dotenv';
import { User, UserSchema } from 'src/user/datalayer/user';
import { UserModule } from 'src/user/user.module';
dotenv.config();

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthentificationService, LocalStrategy, JwtStrategy],
  exports: [AuthentificationService],
  controllers: [AuthentificationController],
})
export class AuthentificationModule {}
