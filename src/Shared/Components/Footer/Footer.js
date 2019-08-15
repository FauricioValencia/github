import React from 'react';
import { Layout } from 'antd';

//* Styles
import classes from './Footer.module.scss';

/**
 * Footer of aplicacion
 * @return {Component} footer of aplication with name of creator
 */
const { Footer } = Layout;
export function FooterComponent() {
  return (
    <Footer className={classes.root}>
      <strong>Created by Julian Valencia</strong>
    </Footer>
  );
}
