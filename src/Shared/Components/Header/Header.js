import React from "react";
import { useCookies } from 'react-cookie';
import classes from "./Header.styles.module.scss";
import { Layout } from "antd";
import "antd/dist/antd.css";
// import LOGO_MILO from "../../../assets/logo-alt.png";

const { Header } = Layout;

export function HeaderComponent() {
  const cookies = useCookies(['values']);
  console.log('header: ', cookies)
//   const tasks = useSelector(({ todo }) => todo.tasks);
//   const taskPendent = Array.isArray(tasks)
//     ? tasks.filter(tk => tk.state === false)
//     : [];
  return (
    <Header className={classes.root}>
          <h2>
            <span>Pending tasks:</span>
          </h2>
    </Header>
  );
}


