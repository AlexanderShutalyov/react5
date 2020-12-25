import React from 'react';
import { PlainText, SpanText } from '../../atoms/index';
import styles from "./HotelItemCard.module.css"

const HotelItemCard = ( {props} ) => {
    const features = props.ratePlan.features;

    return (
        <div className={styles.HotelItemClass}>
            <div className={styles.thumbnail}>
                <img className={styles.thumbnailImg} src={props.thumbnailUrl}/>
            </div>
            <div className={styles.HotelItemContent}>
                <PlainText>{props.name}</PlainText>
                <PlainText>{props.address.countryName}  {props.address.locality} {props.address.region} {props.address.streetAddress}</PlainText>
                <PlainText>{props.ratePlan.price.current} {props.ratePlan.price.info}</PlainText>
                <PlainText>{props.guestReviews.badgeText} {props.guestReviews.rating}</PlainText>
                <p>
                    {Object.keys(features)
                        .filter(key => features[key] === true )
                        .map((props, index) => {
                            return (<SpanText key={index}>{props}</SpanText>)
                        })}
                </p>

            </div>
        </div>
    )
};

export default HotelItemCard;

