import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthentificationService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);

    const isMatching = await bcrypt.compare(password, user.password);
    if (user && isMatching) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(email: string) {
    const user = await this.userService.findByEmail(email);
    const id= await this.userService.findIdByEmail(email);
    const payload = { firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      password: user.password,
      userType: user.userType,
      address: user.address,
      companyName: user.companyName,
      description:user.description,
      nrSellingCars: user.nrSellingCars,
      country:user.country,
      city:user.city,
      zipcode:user.zipcode,
      avatar:user.avatar,
      lang:user.lang,
      lat:user.lat,
      isVerified:user.isVerified,
      
      id:id };
    return {
      access_token: this.jwtService.sign(payload, { expiresIn: '30m' }),
    };
  }
}
