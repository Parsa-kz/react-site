import React from 'react';
import styles from "./Navbar.module.css";
import xbox from "../images/xbox.png";

const Navbar = () => {
    return (
        <header className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.list}>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About us</li>
                </ul>
            </div>
            <div className={styles.logo}>
                <img src={xbox} />
            </div>
        </header>
    );
};

export default Navbar;