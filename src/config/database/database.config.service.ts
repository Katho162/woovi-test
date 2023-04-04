import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
  constructor(private configService: ConfigService) {}

  get postgresHost(): string {
    return this.configService.get<string>('database.postgresHost');
  }
  get postgresPort(): string {
    return this.configService.get<string>('database.postgresPort');
  }
  get postgresDb(): string {
    return this.configService.get<string>('database.postgresDb');
  }
  get postgresUser(): number {
    return this.configService.get<number>('database.postgresUser');
  }
  get postgresPassword(): number {
    return this.configService.get<number>('database.postgresPassword');
  }
  get runMigrations(): number {
    return this.configService.get<number>('database.runMigrations');
  }
}
