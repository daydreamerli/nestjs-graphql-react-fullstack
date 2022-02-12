import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.services';
import { User } from './entities/user';
import { AuthModule } from '../auth/auth.module';



@Module({
  imports: [TypeOrmModule.forFeature([User]),forwardRef(() => AuthModule)
  ],
  providers: [UsersService, UsersResolver],
  exports: [UsersService],
})
export class UsersModule {}