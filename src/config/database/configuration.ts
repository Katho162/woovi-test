import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  postgresHost: process.env.POSTGRES_HOST,
  postgresPort: process.env.POSTGRES_PORT,
  postgresDb: process.env.POSTGRES_DB,
  postgresUser: process.env.POSTGRES_USER,
  postgresPassword: process.env.POSTGRES_PASSWORD,
  runMigrations: process.env.RUN_MIGRATIONS,
}));