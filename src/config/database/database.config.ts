import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_NAME,
  entities: [`${__dirname}/../../modules/**/entities/*.entity{.ts,.js}`],
  logging: process.env.NODE_ENV === 'development',
  migrations: [`${__dirname}/../../../db/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
}));
