import GithubService from './github.services';
const githubService = new GithubService();

describe('Traer todos los repositorios', () => {
  test('Haciendo una peticion a la api de github', done => {
    githubService.getReposUser('FauricioValencia').then(data => {
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });
});
