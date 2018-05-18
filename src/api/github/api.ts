import { IUser } from './interfaces.d';
export class Api {
  private static readonly serverUrl: string = 'http://localhost:4000';
  private static readonly headers: Headers = new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json'
  });

  private static async get(path: string): Promise<any> {
    const response: Response = await fetch(`${this.serverUrl}${path}`, {
      method: 'GET',
      headers: this.headers
    });
    return await response.json();
  }

  public static async fetchUser(username: string): Promise<IUser> {
    const json = await this.get(`/api/user?username=${username}`);
    return {
      Name: json.name,
      Location: json.location,
      Bio: json.bio
    };
  }
}
