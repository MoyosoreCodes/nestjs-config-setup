import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/../../modules/**/entities/*.entity{.ts,.js}`],
  logging: process.env.NODE_ENV === 'development',
  migrations: [`${__dirname}/../../../db/migrations/*{.ts,.js}`],
  migrationsTableName: 'migrations',
}));
