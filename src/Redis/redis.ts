import { createClient } from 'redis';

export class RedisService {
  private client;
  constructor() {
    this.client = createClient();
    this.client.on('error', (err) => {
      console.log('Redis Client Error: ', err);
    });
  }

  set = async (key: string, value: string) => {
    try {
      await this.client.set(key, value);
    } catch (error) {
      console.error('Redis client error cannnot set the key value pair');
    }
  };

  get = async (key: string): Promise<string> => {
    try {
      const val = await this.client.get(key);
      return val;
    } catch (error) {
      console.log('Value not found:', error);
    }
  };

  onModuleInit = async () => {
    try {
      await this.client.connect();
    } catch (err) {
      console.log('Not connected to redis server because: ', err);
    }
  };
  delete = async (key: string) => {
    try {
      const deletedCount = await this.client.del(key);
      console.log(`Deleted ${deletedCount} keys.`);
      return deletedCount;
    } catch (error) {
      console.error('Error while deleting key:', error);
      throw error;
    }
  
  };

  onModuleDestroy = async () => {
    try {
      await this.client.quit();
    } catch (err) {
      console.log('Error while terminate connection', err);
    }
  };
  
}
