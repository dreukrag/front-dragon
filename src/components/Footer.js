import React from 'react';
import styles from './footer.module.scss'
const Footer = () => (
    <div className={["bg-dark", styles.footer].join(" ")}>
        <p>Footer</p>
    </div>
)

export default Footer;