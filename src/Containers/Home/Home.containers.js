import React, { useEffect, useContext, useState, Fragment } from 'react';
import { useCookies } from 'react-cookie';

// ? Context
import { GithubContext } from '../../Constants/Context/context.contants';

//? Components
import { TableRepos } from '../../Components/TableRepo/TableRepos.component';
import { SearchBar } from '../../Components/SearchBar/SearchBar';

export function Home() {
  const cookies = useCookies(['values']);
  const [repos, setRepos] = useState([]);
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
      setRepos(respositories);
    }
  };

  const filterRepos = value => {
    const newRepos = [...repos];
    if (value.length > 3) {
      let newFilter = newRepos.filter(repo => repo.name.includes(value));
      setReposFilter(newFilter);
    }
  };

  return (
    <Fragment>
      <SearchBar setValue={value => filterRepos(value)} />
      <TableRepos repos={reposFilter.length >= 1 ? reposFilter : repos} />
    </Fragment>
  );
}
