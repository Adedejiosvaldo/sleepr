import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DatabaseModule, LoggerModule } from '@app/common';

import { UserDocument, UserSchema } from './model/user.schema';
import { UserRepository } from './user.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: UserDocument.name, schema: UserSchema },
    ]),
    LoggerModule,
  ],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
