import { Logger } from '@nestjs/common';
import datasource from './typeorm.config';

async function runMigrations() {
  const logger = new Logger('MigrationRunner');

  try {
    logger.log('Running migrations!...');
    await datasource.initialize();
    await datasource.runMigrations();
  } catch (err) {
    logger.error(`Migrations Failed!: ${err}`);
    process.exit(0);
  }
}

export { runMigrations };
