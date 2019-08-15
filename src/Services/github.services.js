import axios from 'axios';
import { URL } from "../Config/";

class GithubService {
    
    getDataUser = (user)=>{
        return axios.get(`${URL}users/${user}`)
            .then(({data}) => console.log('response: ', data))
            .catch(error=> console.error('error al traer los datos del usuario: ', error))
    }

    getReposUser =(user)=>{
        return axios.get(`${URL}users/${user}/repos`)
        .then(({data}) => data)
        .catch(error=> console.error('error al traer los datos del usuario: ', error))
    }
}
export default GithubService;
