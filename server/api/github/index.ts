import fetch from 'node-fetch';

export class Api {
  private static readonly apiUrl: string = 'https://api.github.com/users/';

  public static async Fetch(username: string): Promise<Array<any>> {
    const requestOptions = {
      method: 'GET',
      credentials: 'include'
    };
    
    const searchUrl = `${this.apiUrl}${username}`;

    const response = await fetch(searchUrl, requestOptions);
    const json:Promise<any> = await response.json();
    return json;
  }
}
