import axios from 'axios';
import { URL } from '../Config/';

class GithubService {
  /**
   * Get data of user from api
   * @param  {string} user name user github
   * @return {json}    All information about user
   */
  getDataUser = user => {
    return axios
      .get(`${URL}users/${user}`)
      .then(({ data }) => data)
      .catch(error =>
        console.error('error al traer los datos del usuario: ', error)
      );
  };

  /**
   * Get repositories of user from api
   * @param  {string} user name user github
   * @return {json}    All repositories of user
   */

  getReposUser = user => {
    return axios
      .get(`${URL}users/${user}/repos`)
      .then(({ data }) => data)
      .catch(error =>
        console.error('error al traer los datos del usuario: ', error)
      );
  };
}
export default GithubService;
