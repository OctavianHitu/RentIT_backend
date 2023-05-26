import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateUserDto } from "src/dtos/createUserDto";
import { User, userDocument } from "./user";


@Injectable()
export class UserRepository{
    constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {}


    async findall():Promise<User[]>{
        return this.userModel.find().exec();
    }

     async  createUser(userDto:CreateUserDto):Promise<User>{
        if ((await this.userModel.findOne({ email: userDto.email }).exec()) === null) {
            const newUser = new this.userModel(userDto);
            return newUser.save();
          } else {
            throw new Error('Already an accout with this email!');
          }
     }

    async updateUser(id: ObjectId, userDto: Partial<CreateUserDto>): Promise<User> {
        return this.userModel.findOneAndUpdate({ _id: id }, userDto, { new: true });
    }
    async deleteUser(id: ObjectId): Promise<User> {
        return this.userModel.findOneAndDelete({ _id: id });
      }

    async findByEmail(email:string):Promise<any>{
      return(await this.userModel.findOne({email:email}));
    }
    async findIdByEmail(email:string):Promise<any>{
      return(await this.userModel.findOne({email:email}))._id;
    }
}