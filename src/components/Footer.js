import React from 'react';
import styles from './footer.module.scss'
const Footer = () => (
    <div className={["bg-dark", styles.footer].join(" ")}>
        <h5>By Filipe Groh</h5>
    </div>
)

export default Footer;