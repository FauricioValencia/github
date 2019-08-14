import React, { useEffect, Fragment } from 'react';
import { useCookies } from "react-cookie"
import { Router, Red } from "@reach/router";
import { CookiesProvider } from 'react-cookie';

import { Provider } from "react-redux";
import { Layout } from "antd";

//? Pages
import { Inicio } from "../Inicio/Inicio.containers";
import { Home } from "../Home/Home.containers";
//? Components

import { HeaderComponent } from "../../Shared/Components/Header/Header"
import { FooterComponent } from "../../Shared/Components/Footer/Footer";
import { Error404 } from "../../Shared/Components/Error404/Error404"

const { Content } = Layout;

function App() {
  const cookies = useCookies(['values']);
  console.log('desde la app: ',cookies[0].values)
  return (
    <CookiesProvider>
      <Layout style={{ minHeight: "100%" }}>
        <HeaderComponent />
          <Content style={{display:'flex', justifyContent: 'center'}}>
            <Router>
              <Inicio  path="/"/>
              <Home  path="/home"/>
              <Error404 default />
            </Router>
          </Content>
        <FooterComponent/>
      </Layout>
    </CookiesProvider>
  );
}

export default App;
