"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const redis_1 = require("redis");
class RedisService {
    constructor() {
        this.set = async (key, value) => {
            try {
                await this.client.set(key, value);
            }
            catch (error) {
                console.error('Redis client error cannnot set the key value pair');
            }
        };
        this.get = async (key) => {
            try {
                const val = await this.client.get(key);
                return val;
            }
            catch (error) {
                console.log('Value not found:', error);
            }
        };
        this.onModuleInit = async () => {
            try {
                await this.client.connect();
            }
            catch (err) {
                console.log('Not connected to redis server because: ', err);
            }
        };
        this.delete = async (key) => {
            try {
                const deletedCount = await this.client.del(key);
                console.log(`Deleted ${deletedCount} keys.`);
                return deletedCount;
            }
            catch (error) {
                console.error('Error while deleting key:', error);
                throw error;
            }
        };
        this.onModuleDestroy = async () => {
            try {
                await this.client.quit();
            }
            catch (err) {
                console.log('Error while terminate connection', err);
            }
        };
        this.client = (0, redis_1.createClient)();
        this.client.on('error', (err) => {
            console.log('Redis Client Error: ', err);
        });
    }
}
exports.RedisService = RedisService;
//# sourceMappingURL=redis.js.map