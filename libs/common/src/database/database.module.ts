import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ModelDefinition, MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // initalize  async the mongoose module with the uri from the config service
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      //   list of all dependencies we need to make this work
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {
  static forFeature(models: ModelDefinition[]) {
    return MongooseModule.forFeature(models);
  }
}
