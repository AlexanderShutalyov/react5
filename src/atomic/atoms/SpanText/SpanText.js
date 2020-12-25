import React from 'react';
import styles from "./SpanText.module.css"

const SpanText = ({children, classNames}) => {
    return (
        <span className={styles.spanText}>{children}</span>
    )
};

export default SpanText;
