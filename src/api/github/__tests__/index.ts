jest.mock('../api');
import { Github } from '../index';

describe('GetUser()', () => {
  it('should return a user', async () => {
    const user = await Github.GetUser('edwarddamato');
    return expect(user).toMatchObject({
        Name: 'Edward D\'Amato',
        Location: 'London',
        Bio: 'Moo!'
      });
  });
});