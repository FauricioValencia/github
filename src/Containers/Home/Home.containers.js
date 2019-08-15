import React, {useEffect, useContext, useState, Fragment} from 'react'
import { useCookies } from 'react-cookie';

// ? Context
import {GithubContext} from "../../Constants/Context/context.contants"

//? Components
import {TableRepos} from "../../Components/TableRepo/TableRepos.component";
import { SearchBar } from "../../Components/SearchBar/SearchBar";




export function Home() {
    const cookies = useCookies(['values']);
    const [repos, setRepos]= useState([]);
    const [valueSearch, setValueSearch]= useState("");
    const gitHubServices = useContext(GithubContext);
    console.log('home: ', cookies[0].values.names)
    console.log(Boolean(cookies[0].values))


    useEffect( ()=>{
    getRepos()
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const getRepos =async()=>{
        if(Boolean(cookies[0].values)){
            let respositories= await gitHubServices.getReposUser(cookies[0].values.userGithub)
            console.log('repositorios: ', respositories)
            setRepos(respositories);
        }
    }
    return (
        <Fragment>
            <SearchBar value={valueSearch} setValue={(value)=>setValueSearch(value)}/>
            <TableRepos repos={repos}/>
        </Fragment>
    )
}
