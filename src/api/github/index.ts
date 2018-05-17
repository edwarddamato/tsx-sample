import { Api } from './api';
import { IUser } from './interfaces.d';

export class Github {
  public static async GetUser(username: string): Promise<IUser> {
    return await Api.FetchUser(username);
  }
}
