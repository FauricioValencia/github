import axios from 'axios';
import { URL } from "../Config/";

class GithubService {
    
    getDataUser = (user)=>{
        return axios.get(`${URL}users/${user}`)
            .then(response => console.log('response: ', response))
            .catch(error=> console.error('error al traer los datos del usuario: ', error))
    }

    getReposUser =(user)=>{
        return axios.get(`${URL}users/${user}/repos`)
        .then(response => console.log('response: ', response))
        .catch(error=> console.error('error al traer los datos del usuario: ', error))
    }
}
export default new GithubService();
