import { DataSource, DataSourceOptions } from 'typeorm';
import { OrmConfig } from './database.config';
export const connectionSource = new DataSource(OrmConfig as DataSourceOptions);
