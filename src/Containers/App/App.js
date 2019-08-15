import React from 'react';
import { Router } from '@reach/router';
import { CookiesProvider } from 'react-cookie';

import { Layout } from 'antd';

//? Pages
import { Inicio } from '../Inicio/Inicio.containers';
import { Home } from '../Home/Home.containers';

//? Components

import { HeaderComponent } from '../../Shared/Components/Header/Header';
import { FooterComponent } from '../../Shared/Components/Footer/Footer';
import { Error404 } from '../../Shared/Components/Error404/Error404';

//? Services

import GithubService from '../../Services/github.services';

// ? Context
import { GithubContext } from '../../Constants/Context/context.contants';
const { Content } = Layout;
const gitService = new GithubService();
function App() {
  return (
    <CookiesProvider>
      <GithubContext.Provider value={gitService}>
        <Layout style={{ minHeight: '100%' }}>
          <HeaderComponent />
          <Content style={{ display: 'flex', justifyContent: 'center' }}>
            <Router>
              <Inicio path="/" />
              <Home path="/home" />
              <Error404 default />
            </Router>
          </Content>
          <FooterComponent />
        </Layout>
      </GithubContext.Provider>
    </CookiesProvider>
  );
}

export default App;
