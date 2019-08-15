import React from "react";
import { useCookies } from 'react-cookie';
import classes from "./Header.module.scss";
import { Layout } from "antd";
import "antd/dist/antd.css";
import Logo from "../Logo/Logo"

const { Header } = Layout;

export function HeaderComponent() {
  const cookies = useCookies(['values']);
//   const tasks = useSelector(({ todo }) => todo.tasks);
//   const taskPendent = Array.isArray(tasks)
//     ? tasks.filter(tk => tk.state === false)
//     : [];
  return (
    <Header className={classes.root}>
        {/* <div className={classes.containerLogo}><Logo/></div> */}
          <h2>
            <span> Nombre candidato: {cookies[0] && cookies[0].values && cookies[0].values.names}</span>
          </h2>
    </Header>
  );
}


