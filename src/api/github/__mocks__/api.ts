import { IUser } from '../interfaces.d';
export class Api {
  public static FetchUser(username: string): Promise<IUser> {
    return new Promise(resolve => {
      resolve({
        Name: "Edward D'Amato",
        Location: 'London',
        Bio: 'Moo!'
      });
    });
  }
}
