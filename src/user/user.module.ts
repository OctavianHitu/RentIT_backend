import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './datalayer/user';
import { UserRepository } from './datalayer/user_repository';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService,UserRepository,UserModule],
  imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  exports:[UserService]

})
export class UserModule {}
