import { resolve } from 'path';
import { DatabaseType } from 'typeorm';
import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import { DatabaseConfigModule } from 'src/config/database/database.config.module';
import { DatabaseConfigService } from 'src/config/database/database.config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [DatabaseConfigModule],
      useFactory: async (databaseConfigService: DatabaseConfigService) => ({
        type: 'postgres' as DatabaseType,
        host: databaseConfigService.postgresHost,
        port: databaseConfigService.postgresPort,
        username: databaseConfigService.postgresUser,
        password: databaseConfigService.postgresPassword,
        database: databaseConfigService.postgresDb,
        synchronize: process.env.MODE == 'DEV' ? true : false,
        autoLoadEntities: true,
        entities: [
          resolve(__dirname, '..', '..', '..', 'models').concat(
            '/**/entities/*{t,j}s',
          ),
        ],
        migrations: ['src/database/migrations/*.ts'],
      }),
      inject: [DatabaseConfigService],
    } as TypeOrmModuleAsyncOptions),
  ],
})
export class DatabaseProviderModule {}
