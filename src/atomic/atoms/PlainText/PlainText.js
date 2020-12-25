import React from 'react';
import styles from "./PlainText.module.css"

const PlainText = ({children, classNames}) => (
    <p className={styles.pTag}>{children}</p>
);

export default PlainText;