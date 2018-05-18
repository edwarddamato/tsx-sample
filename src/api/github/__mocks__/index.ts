import { IUser } from '../../../api/github/interfaces.d';
export class Github {
  public static getUser(username: string): Promise<IUser> {
    return new Promise(resolve => {
      resolve({
        Name: "Edward D'Amato",
        Location: 'London',
        Bio: 'Moo!'
      });
    });
  }
}
