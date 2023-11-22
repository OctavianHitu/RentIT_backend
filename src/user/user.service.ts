import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateUserDto } from 'src/dtos/createUserDto';
import { UserRepository } from './datalayer/user_repository';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}
  findAll() {
    return this.userRepo.findall();
  }

  async createUser(userDto: CreateUserDto) {
    const hash = await bcrypt.hash(userDto.password, 10);
    userDto.password = hash;
    return this.userRepo.createUser(userDto);
  }
  
  deleteUser(id: ObjectId) {
    return this.userRepo.deleteUser(id);
  }

  async updateUser(id: ObjectId, userDto: Partial<CreateUserDto>) {
    if (userDto.password) {
      const hash = await bcrypt.hash(userDto.password, 10);
      userDto.password = hash;
    }
    return this.userRepo.updateUser(id, userDto);
  }

  async findByEmail(email:string):Promise<any>{
    return this.userRepo.findByEmail(email);
  }
  async findIdByEmail(email:string):Promise<any>{
    return this.userRepo.findIdByEmail(email);
  }
}
