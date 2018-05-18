import { Api } from './api';
import { IUser } from './interfaces.d';

export class Github {
  public static async getUser(username: string): Promise<IUser> {
    return await Api.fetchUser(username);
  }
}
