import React, { useEffect, useContext, useState, Fragment } from 'react';
import { Redirect } from '@reach/router';
import { useCookies } from 'react-cookie';

// ? Context
import { GithubContext } from '../../Constants/Context/context.contants';

//? Components
import { TableRepos } from '../../Components/TableRepo/TableRepos.component';
import { SearchBar } from '../../Components/SearchBar/SearchBar';

export function Home() {
  const cookies = useCookies(['values']);
  const [allRepos, setAllRepos] = useState([]);
  const [reposFilter, setReposFilter] = useState([]);
  const gitHubServices = useContext(GithubContext);

  useEffect(() => {
    getRepos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getRepos = async () => {
    if (Boolean(cookies[0].values)) {
      let respositories = await gitHubServices.getReposUser(
        cookies[0].values.userGithub
      );
      setAllRepos(respositories);
      setReposFilter(respositories);
    }
  };

  const filterRepos = value => {
    const newRepos = [...allRepos];
    if (value.length > 3) {
      let newFilter = newRepos.filter(repo => repo.name.includes(value));
      setReposFilter(newFilter);
    } else if (value.length === 0) {
      setReposFilter(allRepos);
    }
  };
  return (
    <Fragment>
      {!Boolean(cookies[0].values) && <Redirect noThrow to="/" />}
      <SearchBar setValue={value => filterRepos(value)} />
      <TableRepos repos={reposFilter} />
    </Fragment>
  );
}
