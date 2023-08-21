export declare class RedisService {
    private client;
    constructor();
    set: (key: string, value: string) => Promise<void>;
    get: (key: string) => Promise<string>;
    onModuleInit: () => Promise<void>;
    delete: (key: string) => Promise<any>;
    onModuleDestroy: () => Promise<void>;
}
