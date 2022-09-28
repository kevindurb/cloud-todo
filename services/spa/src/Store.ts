import { Service } from 'typedi';

@Service()
export class Store {
  async get<T extends any>(key: string): Promise<T | undefined> {
    const value = localStorage.getItem(key);

    if (!value) return;

    try {
      return JSON.parse(value);
    } catch {
      return;
    }
  }

  async set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
