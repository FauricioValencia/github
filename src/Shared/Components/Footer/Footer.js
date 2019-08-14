import React from 'react'
import { Layout } from "antd";

//* Styles
import classes from './Footer.styles.module.scss'

const { Footer } = Layout;
export function FooterComponent() {
    return (
<Footer className={classes.root}><strong>Created by Julian Valencia</strong></Footer>
    )
}
