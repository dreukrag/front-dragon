import React from 'react';
import styles from './footer.module.scss'
const Footer = () => (
    <div className={["bg-dark", styles.footer].join(" ")}>
        <p>By Filipe Groh</p>
    </div>
)

export default Footer;