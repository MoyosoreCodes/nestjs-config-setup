import { Logger } from '@nestjs/common';
import datasource from './typeorm.config';

async function runMigrations() {
  const logger = new Logger('MigrationRunner');

  try {
    await datasource.initialize();
    if (process.env.NODE_ENV === 'test') {
      logger.log("Synchronizing DB")
      await datasource.synchronize()
    } else {
      logger.log('Running migrations');
      await datasource.runMigrations();
    }
  } catch (err) {
    logger.error(`Migrations Failed!: ${err}`);
    process.exit(1);
  }
}

export { runMigrations };
