import React, { useEffect, Fragment } from 'react';
import { Router } from "@reach/router";
import { Provider } from "react-redux";
import { Layout } from "antd";

//? Pages
import { Inicio } from "../Inicio/Inicio";
//? Components

import { HeaderComponent } from "../../Shared/Components/Header/Header"
import { FooterComponent } from "../../Shared/Components/Footer/Footer";
import { Error404 } from "../../Shared/Components/Error404/Error404"

const { Content } = Layout;

function App() {
  return (
      <Layout style={{ minHeight: "100%" }}>
        <HeaderComponent />
          <Content style={{display:'flex', justifyContent: 'center'}}>
            <Router>
              <Inicio  path="/"/>
              <Error404 default />
            </Router>
          </Content>
        <FooterComponent/>
      </Layout>
  );
}

export default App;
