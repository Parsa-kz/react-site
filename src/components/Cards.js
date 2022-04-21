import React, { Component } from 'react';
import styles from "./Cards.module.css";
import Card from "./Card";
import iphonex from "../images/iphonex.png"

class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphonex} name="iphone X" cost="500 $" />
                <Card image={iphonex} name="iphone X" cost="500 $" />
                <Card image={iphonex} name="iphone X" cost="500 $" />
                <Card image={iphonex} name="iphone X" cost="500 $" />
            </div>
        );
    }
}

export default Cards;