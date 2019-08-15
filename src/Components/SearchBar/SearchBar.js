import React from 'react';
import { Input } from 'antd';
import classes from './SearchBar.module.scss';
const { Search } = Input;
export function SearchBar({ value, setValue }) {
  return (
    <div className={classes.root}>
      <Search
        placeholder="Buscar repositorio"
        // value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
}
