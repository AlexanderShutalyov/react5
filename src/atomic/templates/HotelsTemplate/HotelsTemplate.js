import React, {Component, useState, useEffect} from "react";
import {MarkeredMap} from "../../../atomic/molecules/index";
import {HotelsList} from "../../organisms/index";
import styles from "./HotelsTemplate.module.css"

const HotelsTemplate = () => {
    return (
        <div className={styles.App}>
            <div className={styles.topContent}>
                MENU
            </div>
            <div className={styles.mainContent}>
                <div className={styles.leftContent}>
                    <HotelsList/>
                </div>
                <div className={styles.rightContent}>
                    <MarkeredMap/>
                </div>
            </div>
        </div>
    )
};

export default HotelsTemplate;