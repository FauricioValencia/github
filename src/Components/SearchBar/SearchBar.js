import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';
import classes from './SearchBar.module.scss';
const { Search } = Input;

/**
 * Let filter repositories
 * @param  {Function} setValue Let start filter repositories
 * @return {Component}      SearchBar for filter repositories
 */

export function SearchBar({ setValue }) {
  return (
    <div className={classes.root}>
      <Search
        placeholder="Buscar repositorio"
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}
SearchBar.propTypes = {
  setValue: PropTypes.func
};
