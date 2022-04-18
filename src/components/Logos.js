import React from 'react';
import styles from "./Logos.module.css";
import apple from "../images/apple.png";
import samsung from "../images/samsung.png";
import xiaomi from "../images/xiaomi.jpg";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who support us</h3>
            <div>
                <img src={apple} alt="logo" />
                <img src={samsung} alt="logo" />
                <img src={xiaomi} alt="logo" />
            </div>
        </div>
    );
};

export default Logos;