import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { jwtSecret } from './constants';
import { LocalStrategy } from './stratagies/local.stratagy';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './stratagies/jwt.stratage';

@Module({
  imports: [
     forwardRef(() => UsersModule),
     PassportModule.register({ defaultStrategy: 'jwt' }),
     JwtModule.registerAsync({
      useFactory: () => ({
        secret: jwtSecret,
        signOptions: { expiresIn: '24h' }
      })
    })],
  controllers:[AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService,JwtStrategy, LocalStrategy],
})
export class AuthModule {}
