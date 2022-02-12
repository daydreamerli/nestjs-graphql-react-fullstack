import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../users/entities/user';
import { AuthService, LoginResponse } from './auth.service';
import { LocalAuthGuard } from './guards/local-host.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Controller('auth')
export class AuthController {

  constructor(private readonly authService: AuthService) { }
  
  
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request): Promise<LoginResponse> {
     
    return this.authService.login(req.user as User);
  }

  @Post('signup')
  async signup(@Req() req: Request): Promise<User> {
     
    return this.authService.signup(req.body);
  }

}
