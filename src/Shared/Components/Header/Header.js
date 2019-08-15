import React from 'react';
import { useCookies } from 'react-cookie';
import classes from './Header.module.scss';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Logo from '../Logo/Logo';

const { Header } = Layout;

export function HeaderComponent() {
  const cookies = useCookies(['values']);

  return (
    <Header className={classes.root}>
      <div className={classes.containerLogo}>
        <Logo />
      </div>
      <h2>
        <span>
          {cookies[0]
            ? cookies[0].values
              ? `Nombre candidato: ${cookies[0].values.names} 
              ${cookies[0].values.lastnames},
              ${cookies[0].values.userGithub}
                `
              : 'Prueba de selección'
            : 'Prueba de selección'}
        </span>
      </h2>
    </Header>
  );
}
