import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export declare const TypeOrmOptions: TypeOrmModuleOptions;
export declare const OrmConfig: {
    migrations: string[];
    cli: {
        migrationsDir: string;
    };
    retryAttempts?: number;
    retryDelay?: number;
    toRetry?: (err: any) => boolean;
    autoLoadEntities?: boolean;
    keepConnectionAlive?: boolean;
    verboseRetryLog?: boolean;
    type?: "mysql" | "mariadb";
    driver?: any;
    charset?: string;
    timezone?: string;
    connectTimeout?: number;
    acquireTimeout?: number;
    insecureAuth?: boolean;
    supportBigNumbers?: boolean;
    bigNumberStrings?: boolean;
    dateStrings?: boolean | string[];
    debug?: boolean | string[];
    trace?: boolean;
    multipleStatements?: boolean;
    legacySpatialSupport?: boolean;
    flags?: string[];
    connectorPackage?: "mysql" | "mysql2";
    replication?: {
        readonly master: import("typeorm/driver/mysql/MysqlConnectionCredentialsOptions").MysqlConnectionCredentialsOptions;
        readonly slaves: import("typeorm/driver/mysql/MysqlConnectionCredentialsOptions").MysqlConnectionCredentialsOptions[];
        readonly canRetry?: boolean;
        readonly removeNodeErrorCount?: number;
        readonly restoreNodeTimeout?: number;
        readonly selector?: "RR" | "RANDOM" | "ORDER";
    };
    name?: string;
    entities?: import("typeorm").MixedList<string | Function | import("typeorm").EntitySchema<any>>;
    subscribers?: import("typeorm").MixedList<string | Function>;
    migrationsTableName?: string;
    migrationsTransactionMode?: "all" | "none" | "each";
    metadataTableName?: string;
    namingStrategy?: import("typeorm").NamingStrategyInterface;
    logging?: import("typeorm").LoggerOptions;
    logger?: "debug" | "advanced-console" | "simple-console" | "file" | import("typeorm").Logger;
    maxQueryExecutionTime?: number;
    poolSize?: number;
    synchronize?: boolean;
    migrationsRun?: boolean;
    dropSchema?: boolean;
    entityPrefix?: string;
    entitySkipConstructor?: boolean;
    extra?: any;
    relationLoadStrategy?: "join" | "query";
    typename?: string;
    cache?: boolean | {
        readonly type?: "database" | "redis" | "ioredis" | "ioredis/cluster";
        readonly provider?: (connection: import("typeorm").DataSource) => import("typeorm/cache/QueryResultCache").QueryResultCache;
        readonly tableName?: string;
        readonly options?: any;
        readonly alwaysEnabled?: boolean;
        readonly duration?: number;
        readonly ignoreErrors?: boolean;
    };
    url?: string;
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    database?: string;
    ssl?: any;
    socketPath?: string;
};
