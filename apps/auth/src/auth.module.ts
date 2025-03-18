import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { LoggerModule } from '@app/common';

@Module({
  imports: [UsersModule, LoggerModule],
  controllers: [AuthController, UsersController],
  providers: [AuthService],
})
export class AuthModule {}
