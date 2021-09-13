import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.services';
import { User } from './entities/user';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.stratage';

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule.register({
    secret: 'hard!to-guess_secret',
    signOptions: { expiresIn: '1h' },
  }),],
  providers: [UsersService, UsersResolver,JwtStrategy],
  exports: [UsersService],
})
export class UsersModule {}