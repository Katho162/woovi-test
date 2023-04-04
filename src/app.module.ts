import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import UserEntity from './models/entities/user/user.entity';
import { DatabaseProviderModule } from './providers/database/database-provider/database-provider.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    DatabaseProviderModule,
    TypeOrmModule.forFeature([UserEntity]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
