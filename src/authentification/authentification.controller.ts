import { Body, Request, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/roles/roles.guard';
import { AuthentificationService } from './authentification.service';
import { JwtAuthGuard } from './jwt-auth.guars';
import { LocalAuthGuard } from './local-auth.guards';

@Controller('authentification')
export class AuthentificationController {
  constructor(private authService: AuthentificationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body('email') req) {
    return this.authService.login(req);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Get('admin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  create(@Request() req) {
    return 'I am an admin';
  }
}
